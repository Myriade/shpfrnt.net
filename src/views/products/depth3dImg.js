function depth3dImg() {
  const allCanvas = document.querySelectorAll(".webgl-canvas");

  const scaleFactor = 0.03;
  const mouseSmoothness = 0.05;
  let originalImage = { width: 1, height: 1 }; // Replaced after loading

  for (const canvas of allCanvas) {
    const gl = canvas.getContext("webgl");

    if (!gl) {
      console.log('WebGL is not supported');
      return;
    }

    const originalTexture = twgl.createTexture(gl, {
      src: './assets/products/images/' + canvas.getAttribute('data-src-img'),
    }, (err, texture, source) => {
      if (err) {
        console.error('Failed to load original image:', err);
      } else {
        originalImage = source;
      }
    });

    const mapTexture = twgl.createTexture(gl, {
      src: './assets/products/images/' + canvas.getAttribute('data-depth-map'),
    });

    const programInfo = twgl.createProgramInfo(gl, ["vs", "fs"]);
    const bufferInfo = twgl.primitives.createXYQuadBufferInfo(gl);

    const canvasRect = canvas.getBoundingClientRect();
    const mouse = [0, 0];

    const updateMouse = (event) => {
      const rect = canvasRect;
      mouse[0] = ((event.clientX - rect.left) / rect.width * 2 - 1) * -scaleFactor;
      mouse[1] = ((event.clientY - rect.top) / rect.height * 2 - 1) * -scaleFactor;
    };

    canvas.addEventListener('mousemove', updateMouse);
    canvas.addEventListener('touchmove', (event) => {
      updateMouse(event.touches[0]);
    });

    canvas.addEventListener('mouseleave', () => {
      mouse[0] = 0;
      mouse[1] = 0;
    });

    requestAnimationFrame(render);

    function render() {
      twgl.resizeCanvasToDisplaySize(gl.canvas);

      gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.useProgram(programInfo.program);

      twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo);

      const canvasAspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
      const imageAspect = originalImage.width / originalImage.height;
      const mat = m3.scaling(imageAspect / canvasAspect, -1);

      twgl.setUniforms(programInfo, {
        u_matrix: mat,
        u_originalImage: originalTexture,
        u_mapImage: mapTexture,
        u_mouse: mouse, // Utilisez directement la position de la souris
      });

      twgl.drawBufferInfo(gl, bufferInfo);

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
      attribute vec2 position;
      attribute vec2 texcoord;
      uniform mat3 u_matrix;
      varying vec2 v_texcoord;
      void main() {
         gl_Position = vec4(u_matrix * vec3(position, 1), 1);
         v_texcoord = texcoord;
      }
    </script>
    <script id="fs" type="x-shader/x-fragment">
      precision mediump float;
      uniform vec2 u_mouse;
      uniform sampler2D u_originalImage;
      uniform sampler2D u_mapImage;
      varying vec2 v_texcoord;
      void main() {
         vec4 depthDistortion = texture2D(u_mapImage, v_texcoord);
         float parallaxMult = depthDistortion.r;
         vec2 parallax = (u_mouse) * parallaxMult;
         vec4 original = texture2D(u_originalImage, (v_texcoord + parallax));
         gl_FragColor = original;
      }
    </script>
  `;
}

export { depth3dImg, canvasShadersMarkup };