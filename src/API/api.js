// 데이터 패칭 함수 정의 
import axios from 'axios'

const API_URL = "https://emojihub.yurace.pro/api/all";

export async function getEmoji(page = 1) {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    }catch (error) {
        throw new Error ('이모지 패칭 실패')
    }
}