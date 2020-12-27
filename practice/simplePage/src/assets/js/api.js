const API = {
    ajax: {
        query: "/v1/search/movie.json",
        key: {
            CLIENT_ID: "DXGGyoy_R6h_AXjrehxL",
            CLIENT_SECRET: "oYB51nGp7j",
        },
        config: {
            headers: {
                'X-Naver-Client-Id': "DXGGyoy_R6h_AXjrehxL",
                'X-Naver-Client-Secret': "oYB51nGp7j"
            },
            mode: {
                CORS: "cors"
            }
        },
        get: {
            // 
        },
        post: {
            // 
        }
    },

    default: {
        image: "https://via.placeholder.com/100"
    }


};

export default API