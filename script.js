// Modal handling functions
const showModal = (message, isError = false) => {
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modal-message');
    modalMessage.textContent = message;
    modal.style.display = 'flex';
    modalMessage.style.color = isError ? '#ff5555' : '#00ff88';
};

const closeModal = () => {
    document.getElementById('modal').style.display = 'none';
};

document.getElementById('modal-close').addEventListener('click', closeModal);

document.getElementById('create-profiles').addEventListener('click', async () => {
    const bearerToken = document.getElementById('bearer-token').value.trim();
    const profileCount = parseInt(document.getElementById('profile-count').value);
    const statusElement = document.getElementById('status');

    // Validate inputs
    if (!bearerToken) {
        showModal('Please enter a valid API token.', true);
        statusElement.textContent = '';
        return;
    }

    if (isNaN(profileCount) || profileCount <= 0) {
        showModal('Please enter a valid number of profiles.', true);
        statusElement.textContent = '';
        return;
    }

    statusElement.textContent = `Creating ${profileCount} profiles...`;
    statusElement.className = 'status';

    // Generate random string for platform
    const generateRandomString = (length) => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    };

    // Profile creation loop
    for (let n = 1; n <= profileCount; n++) {
        statusElement.textContent = `Creating profile ${n} of ${profileCount}`;
        
        const randNum = Math.floor(Math.random() * 1000);
        const randName = `BRAHMOS ${randNum}`;
        const linuxPart = generateRandomString(4);
        const randDigits = Math.floor(Math.random() * 100);
        const randPlatform = `Linux kf${linuxPart}${randDigits}`;

        // Profile JSON data (same as in batch file)
        const profileData = {
            name: randName,
            notes: "",
            browserType: "chrome",
            canBeRunning: true,
            os: "android",
            osSpec: "",
            startUrl: "chrome://extensions",
            autoLang: true,
            bookmarks: {
                bookmark_bar: { children: [], date_added: "13396587745173534", date_last_used: "0", date_modified: "13396587745173535", guid: "0bc5d13f-2cba-5d74-951f-3f233fe6c908", id: "1", name: "बुकमार्क बार", type: "folder" },
                other: { children: [], date_added: "13396587745173538", date_last_used: "0", date_modified: "13396587745173539", guid: "82b081ec-3dd3-529c-8475-ab6c344590dd", id: "2", name: "अन्य बुकमार्क", type: "folder" },
                synced: { children: [], date_added: "13396587745173541", date_last_used: "0", date_modified: "13396587745173541", guid: "4cf2e351-0e85-532b-bb37-df045d8f8d0f", id: "3", name: "मोबाइल बुकमार्क", type: "folder" }
            },
            googleServicesEnabled: false,
            isBookmarksSynced: true,
            launchArguments: "",
            lockEnabled: false,
            debugMode: false,
            navigator: {
                userAgent: "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.7049.41 Safari/537.36",
                resolution: "1280x800",
                language: "en-US,en;q=0.9",
                platform: randPlatform,
                hardwareConcurrency: 64,
                doNotTrack: false,
                deviceMemory: 8,
                maxTouchPoints: 5
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
            proxyEnabled: false,
            autoProxyServer: "",
            autoProxyUsername: "",
            autoProxyPassword: "",
            proxy: {
                mode: "none",
                host: "",
                port: 80,
                username: "",
                password: "",
                autoProxyRegion: "us",
                torProxyRegion: "us"
            },
            dns: "",
            plugins: {
                enableVulnerable: false,
                enableFlash: true
            },
            timezone: {
                enabled: true,
                fillBasedOnIp: true,
                timezone: ""
            },
            geolocation: {
                mode: "block",
                enabled: true,
                customize: true,
                fillBasedOnIp: true,
                latitude: 0,
                longitude: 0,
                accuracy: 10,
                isCustomCoordinates: false
            },
            audioContext: {
                mode: "off",
                noise: 1.595416106475e-8
            },
            canvas: {
                mode: "off",
                noise: 0.48791235
            },
            fonts: {
                enableMasking: true,
                enableDomRect: true,
                families: ["Arial", "Courier", "Courier New", "Georgia", "Helvetica", "Monaco", "Palatino", "Tahoma", "Times", "Times New Roman", "Verdana", "Baskerville"]
            },
            mediaDevices: {
                enableMasking: false,
                uid: "14cd2c00496e4a4385232db64c55651385080ce686a34991b601543c39",
                videoInputs: 0,
                audioInputs: 0,
                audioOutputs: 0
            },
            webRTC: {
                enable: false,
                isEmptyIceList: true,
                mode: "disabled",
                enabled: true,
                customize: true,
                localIpMasking: false,
                fillBasedOnIp: true,
                publicIp: "",
                localIps: []
            },
            webGL: {
                mode: "off",
                getClientRectsNoise: 2.92221,
                noise: 24.477
            },
            webGpu: {
                api: {
                    gpu: true,
                    adapter: true,
                    compat: true,
                    device: true,
                    context: true,
                    offscreen: true,
                    twoD: true
                },
                supportedAdapters: {
                    fallback: null,
                    highPerformance: null
                }
            },
            clientRects: {
                mode: "off",
                noise: 2.92221
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
                    { name: "MAX_3D_TEXTURE_SIZE", value: 4096 },
                    { name: "MAX_ARRAY_TEXTURE_LAYERS", value: 256 },
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
                    { name: "MAX_RENDERBUFFER_SIZE", value: 8192 },
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
                    { name: "MAX_VERTEX_ATTRIBS", value: 16 },
                    { name: "MAX_VERTEX_OUTPUT_COMPONENTS", value: 128 },
                    { name: "MAX_VERTEX_TEXTURE_IMAGE_UNITS", value: 16 },
                    { name: "MAX_VERTEX_UNIFORM_BLOCKS", value: 36 },
                    { name: "MAX_VERTEX_UNIFORM_COMPONENTS", value: 16384 },
                    { name: "MAX_VERTEX_UNIFORM_VECTORS", value: 4096 },
                    { name: "MAX_VIEWPORT_DIMS", value: { "0": 8192, "1": 8192 } },
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
                textureMaxAnisotropyExt: 0,
                shaiderPrecisionFormat: "highp/highp",
                extensions: [
                    "EXT_color_buffer_float",
                    "EXT_float_blend",
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
            s3Path: "686f23d69335e14fb272217e/4a784fc2-01c2-4b10-b517-372d8aad68ee",
            s3Date: "2025-07-10T05:47:13.097Z",
            devicePixelRatio: 1.5,
            owner: "686dd60f1029f294a66ff3a0",
            checkCookies: true,
            chromeExtensions: [],
            userChromeExtensions: [],
            permissions: {
                transferProfile: true,
                transferToMyWorkspace: true,
                shareProfile: true,
                manageFolders: true,
                editProfile: true,
                deleteProfile: true,
                cloneProfile: true,
                exportProfile: true,
                updateUA: true,
                addVpnUfoProxy: true,
                runProfile: true,
                runProfileWeb: true,
                viewProfile: true,
                addProfileTag: true,
                removeProfileTag: true,
                viewShareLinks: true,
                createShareLinks: true,
                updateShareLinks: true,
                deleteShareLinks: true,
                viewCustomExtensions: true
            }
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
                if (response.status === 401) {
                    showModal('Enter Valid API Key', true);
                } else {
                    showModal(`Failed to create profile ${n}: ${response.statusText}`, true);
                }
                statusElement.textContent = '';
                return;
            }

            statusElement.textContent = `Profile ${n} of ${profileCount} created successfully.`;
            statusElement.className = 'status success';
        } catch (error) {
            showModal(`Error creating profile ${n}: ${error.message}`, true);
            statusElement.textContent = '';
            return;
        }
    }

    showModal(`Profiles Created! Refresh your GoLogin home page to see the profiles. Total profiles created: ${profileCount}`, false);
    statusElement.textContent = `Finished creating ${profileCount} profiles!`;
    statusElement.className = 'status success';
});
