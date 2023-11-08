function depth3dImg() {

  // Variables
  const allCanvas = document.querySelectorAll(".webgl-canvas");
  const mouseSmoothness = 0.05;
  let originalImage = { width: 1, height: 1 }; 

  // Loop through all canvas elements
  for (const canvas of allCanvas) {
    const gl = canvas.getContext("webgl");

    if (!gl) {
      console.log('WebGL is not supported');
      return;
    }
    
    // Load the original texture
    const originalTexture = twgl.createTexture(gl, {
      src: './assets/products/images/' + canvas.getAttribute('data-src-img'),
    }, (err, texture, source) => {
      if (err) {
        console.error('Failed to load original image:', err);
      } else {
        originalImage = source;
      }
    });

    // Load the depth map texture
    const mapTexture = twgl.createTexture(gl, {
      src: './assets/products/images/' + canvas.getAttribute('data-depth-map'),
    });

    // Create a program and buffer info
    const programInfo = twgl.createProgramInfo(gl, ["vs", "fs"]);
    const bufferInfo = twgl.primitives.createXYQuadBufferInfo(gl);

    // Get the canvas dimensions and initialize the mouse coordinates
    const canvasRect = canvas.getBoundingClientRect();
    const inputXY = [0, 0];
    
    // Update mouse position on mouse move
    const updateInputXY = (scaleFactor) => (event) => {
      const rect = canvasRect;
      const inputX = event.clientX || event.touches[0].clientX * 6;
      const inputY = event.clientY || event.touches[0].clientY * 5;
      inputXY[0] = ((inputX - rect.left) / rect.width * 2 - 1) * -scaleFactor;
      inputXY[1] = ((inputY - rect.top) / rect.height * 2 - 1) * -scaleFactor;
    };

    // Computer mouse event listener
    if (window.matchMedia('(hover: hover)').matches) {
      console.log('Device has a mouse or touchpad events');
      canvas.addEventListener('mousemove', updateInputXY(0.06) );
    } else { // Mobile device touch event listener
      console.log('Device has no mouse, so has touch events');
      canvas.addEventListener('touchmove', updateInputXY(0.015) );
    }

    // Render function for animation
    requestAnimationFrame(render);

    function render() {
      twgl.resizeCanvasToDisplaySize(gl.canvas);

      // Set the viewport and clear the canvas
      gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
      gl.clearColor(0.96, 0.96, 0.96, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);

      // Use the program and set buffers and attributes
      gl.useProgram(programInfo.program);
      twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo);

      // Calculate scaling based on canvas and image aspect ratios
      const canvasAspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
      const imageAspect = originalImage.width / originalImage.height;
      const mat = m3.scaling(imageAspect / canvasAspect, -1);

      // Set uniforms for the shader program
      twgl.setUniforms(programInfo, {
        u_matrix: mat,
        u_originalImage: originalTexture,
        u_mapImage: mapTexture,
        u_mouse: inputXY, // Use mouse coordinates directly
      });

      // Draw the buffer info
      twgl.drawBufferInfo(gl, bufferInfo);

      // Request the next frame for animation
      requestAnimationFrame(render);
    }
  }
}


function canvasShadersMarkup (item) {
  return `
    <canvas 
      class="webgl-canvas" 
      width="290" 
      height="290" 
      data-src-img=${item.imageFileName} 
      data-depth-map=${item.depthMapFileName} 
    >
    <script id="vs" type="x-shader/x-vertex">
      // Vertex shader
      // Define attribute variables for position and texture coordinates
      attribute vec2 position;
      attribute vec2 texcoord;
      uniform mat3 u_matrix; // Transformation matrix
      varying vec2 v_texcoord; // Output variable for passing texture coordinates to the fragment shader
    
      void main() {
        // Calculate the position of the vertex with the transformation matrix
        gl_Position = vec4(u_matrix * vec3(position, 1), 1);
        v_texcoord = texcoord; // Pass texture coordinates to the fragment shader
      }
    </script>
    
    <script id="fs" type="x-shader/x-fragment">
      // Fragment shader
      // Set the precision for float calculations
      precision mediump float;
      uniform vec2 u_mouse; // Uniform variable for mouse position
      uniform sampler2D u_originalImage; // Uniform variable for the original image texture
      uniform sampler2D u_mapImage; // Uniform variable for the depth map texture
      varying vec2 v_texcoord; // Input variable receiving interpolated texture coordinates
    
      void main() {
        // Sample the depth distortion from the depth map
        vec4 depthDistortion = texture2D(u_mapImage, v_texcoord);
        float parallaxMult = depthDistortion.r; // Extract the parallax multiplier
    
        // Calculate parallax offset based on mouse position and multiplier
        vec2 parallax = (u_mouse) * parallaxMult;
    
        // Sample the original image texture with adjusted texture coordinates
        vec4 original = texture2D(u_originalImage, (v_texcoord + parallax));
    
        // Set the final fragment color to the original color with parallax effect
        gl_FragColor = original;
      }
    </script>

  `;
}

export { depth3dImg, canvasShadersMarkup };