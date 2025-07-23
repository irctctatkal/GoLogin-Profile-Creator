document.getElementById('create-profiles').addEventListener('click', async () => {
    const bearerToken = document.getElementById('bearer-token').value.trim();
    const profileCount = parseInt(document.getElementById('profile-count').value);
    const statusElement = document.getElementById('status');

    // Validate inputs
    if (!bearerToken) {
        statusElement.textContent = 'Please enter a valid API token.';
        statusElement.className = 'status error';
        return;
    }

    if (isNaN(profileCount) || profileCount <= 0) {
        statusElement.textContent = 'Please enters a valid number of profiles.';
        statusElement.className = 'status error';
        return;
    }

    statusElement.textContent = `Creating ${profileCount} profiles...`;
    statusElement.className = 'status';

    // Generate random string for platform
    const generateRandomString = () => {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const uniqueNum = new Date().toTimeString().slice(0, 6).replace(/:/g, '');
        const getRandomChar = () => alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        return `Linux ${getRandomChar()}${getRandomChar()}${getRandomChar()}${uniqueNum}`;
    };

    // Profile creation loop
    for (let n = 1; n <= profileCount; n++) {
        statusElement.textContent = `Creating profile ${n} of ${profileCount}`;
        
        const randNum = Math.floor(Math.random() * 9999) + 1;
        const randName = `Brahmos IRCTC ${randNum}`;
        const randPlatform = generateRandomString();

        // Profile JSON data
        const profileData = {
            name: randName,
            notes: "",
            browserType: "chrome",
            os: "android",
            autoLang: false,
            launchArguments: "",
            lockEnabled: false,
            devicePixelRatio: 1.5,
            navigator: {
                userAgent: "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.7151.56 Safari/537.36",
                resolution: "1980*1080",
                language: "en-US",
                platform: randPlatform,
                hardwareConcurrency: 64,
                doNotTrack: true,
                deviceMemory: 8,
                maxTouchPoints: 6
            },
            storage: {
                local: false,
                extensions: false,
                bookmarks: false,
                history: false,
                passwords: false,
                session: false,
                indexedDb: false,
                enableExternalExtensions: false
            },
            proxy: {
                mode: "none",
                host: "",
                port: 80,
                username: "",
                password: "",
                autoProxyRegion: "us",
                torProxyRegion: "us"
            },
            proxyEnabled: false,
            plugins: {
                enableVulnerable: false,
                enableFlash: false
            },
            timezone: {
                enabled: true,
                fillBasedOnIp: true,
                timezone: ""
            },
            geolocation: {
                isCustomCoordinates: false,
                mode: "allow",
                enabled: true,
                customize: false,
                fillBasedOnIp: true
            },
            audioContext: {
                mode: "noise"
            },
            canvas: {
                mode: "noise"
            },
            fonts: {
                enableMasking: true,
                enableDomRect: true,
                families: ["Arial", "Courier", "Courier New", "Georgia", "Helvetica", "Monaco", "Palatino", "Tahoma", "Times", "Times New Roman", "Verdana", "Baskerville"]
            },
            mediaDevices: {
                enableMasking: true,
                videoInputs: 2,
                audioInputs: 1,
                audioOutputs: 1
            },
            webRTC: {
                isEmptyIceList: true,
                mode: "real",
                enable: true
            },
            clientRects: {
                mode: "noise"
            },
            webGLMetadata: {
                mode: "mask",
                vendor: "ARM",
                renderer: "Mali-G72 MP3"
            },
            webglParams: {
                glCanvas: "webgl2",
                supportedFunctions: [
                    { name: "beginQuery", supported: true },
                    { name: "beginTransformFeedback", supported: true },
                    { name: "bindBufferBase", supported: true },
                    { name: "bindBufferRange", supported: true },
                    { name: "bindSampler", supported: true },
                    { name: "bindTransformFeedback", supported: true },
                    { name: "bindVertexArray", supported: true },
                    { name: "blitFramebuffer", supported: true },
                    { name: "clearBufferfi", supported: true },
                    { name: "clearBufferfv", supported: true },
                    { name: "clearBufferiv", supported: true },
                    { name: "clearBufferuiv", supported: true },
                    { name: "clientWaitSync", supported: true },
                    { name: "compressedTexImage3D", supported: true },
                    { name: "compressedTexSubImage3D", supported: true },
                    { name: "copyBufferSubData", supported: true },
                    { name: "copyTexSubImage3D", supported: true },
                    { name: "createQuery", supported: true },
                    { name: "createSampler", supported: true },
                    { name: "createTransformFeedback", supported: true },
                    { name: "createVertexArray", supported: true },
                    { name: "deleteQuery", supported: true },
                    { name: "deleteSampler", supported: true },
                    { name: "deleteSync", supported: true },
                    { name: "deleteTransformFeedback", supported: true },
                    { name: "deleteVertexArray", supported: true },
                    { name: "drawArraysInstanced", supported: true },
                    { name: "drawBuffers", supported: true },
                    { name: "drawElementsInstanced", supported: true },
                    { name: "drawRangeElements", supported: true },
                    { name: "endQuery", supported: true },
                    { name: "endTransformFeedback", supported: true },
                    { name: "fenceSync", supported: true },
                    { name: "framebufferTextureLayer", supported: true },
                    { name: "getActiveUniformBlockName", supported: true },
                    { name: "getActiveUniformBlockParameter", supported: true },
                    { name: "getActiveUniforms", supported: true },
                    { name: "getBufferSubData", supported: true },
                    { name: "getFragDataLocation", supported: true },
                    { name: "getIndexedParameter", supported: true },
                    { name: "getInternalformatParameter", supported: true },
                    { name: "getQuery", supported: true },
                    { name: "getQueryParameter", supported: true },
                    { name: "getSamplerParameter", supported: true },
                    { name: "getSyncParameter", supported: true },
                    { name: "getTransformFeedbackVarying", supported: true },
                    { name: "getUniformBlockIndex", supported: true },
                    { name: "getUniformIndices", supported: true },
                    { name: "invalidateFramebuffer", supported: true },
                    { name: "invalidateSubFramebuffer", supported: true },
                    { name: "isQuery", supported: true },
                    { name: "isSampler", supported: true },
                    { name: "isSync", supported: true },
                    { name: "isTransformFeedback", supported: true },
                    { name: "isVertexArray", supported: true },
                    { name: "pauseTransformFeedback", supported: true },
                    { name: "readBuffer", supported: true },
                    { name: "renderbufferStorageMultisample", supported: true },
                    { name: "resumeTransformFeedback", supported: true },
                    { name: "samplerParameterf", supported: true },
                    { name: "samplerParameteri", supported: true },
                    { name: "texImage3D", supported: true },
                    { name: "texStorage2D", supported: true },
                    { name: "texStorage3D", supported: true },
                    { name: "texSubImage3D", supported: true },
                    { name: "transformFeedbackVaryings", supported: true },
                    { name: "uniform1ui", supported: true },
                    { name: "uniform1uiv", supported: true },
                    { name: "uniform2ui", supported: true },
                    { name: "uniform2uiv", supported: true },
                    { name: "uniform3ui", supported: true },
                    { name: "uniform3uiv", supported: true },
                    { name: "uniform4ui", supported: true },
                    { name: "uniform4uiv", supported: true },
                    { name: "uniformBlockBinding", supported: true },
                    { name: "uniformMatrix2x3fv", supported: true },
                    { name: "uniformMatrix2x4fv", supported: true },
                    { name: "uniformMatrix3x2fv", supported: true },
                    { name: "uniformMatrix3x4fv", supported: true },
                    { name: "uniformMatrix4x2fv", supported: true },
                    { name: "uniformMatrix4x3fv", supported: true },
                    { name: "vertexAttribDivisor", supported: true },
                    { name: "vertexAttribI4i", supported: true },
                    { name: "vertexAttribI4iv", supported: true },
                    { name: "vertexAttribI4ui", supported: true },
                    { name: "vertexAttribI4uiv", supported: true },
                    { name: "vertexAttribIPointer", supported: true },
                    { name: "waitSync", supported: true }
                ],
                glParamValues: [
                    { name: "ALIASED_LINE_WIDTH_RANGE", value: { "0": 1, "1": 4095.9375 } },
                    { name: "ALIASED_POINT_SIZE_RANGE", value: { "0": 1, "1": 1024 } },
                    { name: "ALPHA_BITS", value: 8 },
                    { name: "BLUE_BITS", value: 8 },
                    { name: "DEPTH_BITS", value: 24 },
                    { name: "GREEN_BITS", value: 8 },
                    { name: "MAX_3D_TEXTURE_SIZE", value: 16383 },
                    { name: "MAX_ARRAY_TEXTURE_LAYERS", value: 4096 },
                    { name: "MAX_COLOR_ATTACHMENTS", value: 4 },
                    { name: "MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS", value: 606208 },
                    { name: "MAX_COMBINED_TEXTURE_IMAGE_UNITS", value: 96 },
                    { name: "MAX_COMBINED_UNIFORM_BLOCKS", value: 216 },
                    { name: "MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS", value: 606208 },
                    { name: "MAX_CUBE_MAP_TEXTURE_SIZE", value: 4096 },
                    { name: "MAX_DRAW_BUFFERS", value: 4 },
                    { name: "MAX_FRAGMENT_INPUT_COMPONENTS", value: 124 },
                    { name: "MAX_FRAGMENT_UNIFORM_BLOCKS", value: 36 },
                    { name: "MAX_FRAGMENT_UNIFORM_COMPONENTS", value: 16384 },
                    { name: "MAX_FRAGMENT_UNIFORM_VECTORS", value: 4096 },
                    { name: "MAX_PROGRAM_TEXEL_OFFSET", value: 7 },
                    { name: "MAX_RENDERBUFFER_SIZE", value: 16383 },
                    { name: "MAX_SAMPLES", value: 4 },
                    { name: "MAX_TEXTURE_IMAGE_UNITS", value: 16 },
                    { name: "MAX_TEXTURE_LOD_BIAS", value: 256 },
                    { name: "MAX_TEXTURE_SIZE", value: 4096 },
                    { name: "MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", value: 64 },
                    { name: "MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS", value: 4 },
                    { name: "MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS", value: 4 },
                    { name: "MAX_UNIFORM_BLOCK_SIZE", value: 65536 },
                    { name: "MAX_UNIFORM_BUFFER_BINDINGS", value: 216 },
                    { name: "MAX_VARYING_COMPONENTS", value: 124 },
                    { name: "MAX_VARYING_VECTORS", value: 31 },
                    { name: "MAX_VERTEX_ATTRIBS", value: 32 },
                    { name: "MAX_VERTEX_OUTPUT_COMPONENTS", value: 128 },
                    { name: "MAX_VERTEX_TEXTURE_IMAGE_UNITS", value: 16 },
                    { name: "MAX_VERTEX_UNIFORM_BLOCKS", value: 36 },
                    { name: "MAX_VERTEX_UNIFORM_COMPONENTS", value: 16384 },
                    { name: "MAX_VERTEX_UNIFORM_VECTORS", value: 4096 },
                    { name: "MAX_VIEWPORT_DIMS", value: { "0": 16383, "1": 16383 } },
                    { name: "MIN_PROGRAM_TEXEL_OFFSET", value: -8 },
                    { name: "RED_BITS", value: 8 },
                    { name: "RENDERER", value: "WebKit WebGL" },
                    { name: "SHADING_LANGUAGE_VERSION", value: "WebGL GLSL ES 3.00 (OpenGL ES GLSL ES 3.0 Chromium)" },
                    { name: "STENCIL_BITS", value: 8 },
                    { name: "UNIFORM_BUFFER_OFFSET_ALIGNMENT", value: 16 },
                    { name: "VENDOR", value: "WebKit" },
                    { name: "VERSION", value: "WebGL 2.0 (OpenGL ES 3.0 Chromium)" }
                ],
                antialiasing: true,
                textureMaxAnisotropyExt: 16,
                shaiderPrecisionFormat: "highp/highp",
                extensions: [
                    "EXT_color_buffer_float",
                    "EXT_float_blend",
                    "EXT_texture_filter_anisotropic",
                    "WEBGL_compressed_texture_astc",
                    "WEBGL_compressed_texture_etc",
                    "WEBGL_compressed_texture_etc1",
                    "WEBGL_debug_renderer_info",
                    "WEBGL_debug_shaders",
                    "WEBGL_lose_context",
                    "WEBGL_multi_draw"
                ]
            },
            extensions: {
                enabled: true,
                preloadCustom: true,
                names: []
            },
            chromeExtensions: [],
            userChromeExtensions: []
        };

        try {
            const response = await fetch('https://api.gologin.com/browser', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${bearerToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(profileData)
            });

            if (!response.ok) {
                throw new Error(`Failed to create profile ${n}: ${response.statusText}`);
            }

            statusElement.textContent = `Profile ${n} of ${profileCount} created successfully.`;
            statusElement.className = 'status success';
        } catch (error) {
            statusElement.textContent = error.message;
            statusElement.className = 'status error';
            return;
        }
    }

    statusElement.textContent = `Finished creating ${profileCount} profiles!`;
    statusElement.className = 'status success';
});
