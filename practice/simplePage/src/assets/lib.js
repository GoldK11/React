import API from 'src/assets/api'
import CONST from 'src/assets/const';

const LIBS = {
    TABULATOR: {
        data: {
            genreList: [
                { "title": "전체", "value": 0 }, { "title": "드라마", "value": 1 }, { "title": "판타지", "value": 2 }, { "title": "서부", "value": 3 }, { "title": "공포", "value": 4 }, { "title": "로맨스", "value": 5 }, { "title": "모험", "value": 6 }, { "title": "스릴러", "value": 7 }, { "title": "느와르", "value": 8 }, { "title": "컬트", "value": 9 }, { "title": "다큐멘터리", "value": 10 }, { "title": "코미디", "value": 11 }, { "title": "가족", "value": 12 }, { "title": "미스터리", "value": 13 }, { "title": "전쟁", "value": 14 }, { "title": "애니메이션", "value": 15 }, { "title": "범죄", "value": 16 }, { "title": "뮤지컬", "value": 17 }, { "title": "SF", "value": 18 }, { "title": "액션", "value": 19 }, { "title": "무협", "value": 20 }, { "title": "에로", "value": 21 }, { "title": "서스펜스", "value": 22 }, { "title": "서사", "value": 23 }, { "title": "블랙코미디", "value": 24 }, { "title": "실험", "value": 25 }, { "title": "영화카툰", "value": 26 }, { "title": "영화음악", "value": 27 }, { "title": "영화패러디포스터", "value": 28 }
            ]
        },
        options: {
            common: {
                height: 'calc(100% - 40px)',
                layout: "fitColumns",
                placeholder: CONST.PLACEHOLDER.EMPTY_TABLE,
                movableColumns: true,
                ajaxConfig: {
                    mode: API.ajax.config.mode.CORS,
                    method: "GET",
                    headers: API.ajax.config.headers
                },
                pagination: "remote",
                paginationSize: 10
            }
        },
    },

    MATERIAL_UI: {
        //
    }
}

export default LIBS;