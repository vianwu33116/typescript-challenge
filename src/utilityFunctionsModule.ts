/**
 * 任務：實作一個函式 `formatDate`，將日期物件轉換為 'YYYY-MM-DD' 的格式。
 *
 * 範例：
 * formatDate(new Date('2023-01-01')) 應該回傳 '2023-01-01'
 *
 * @param date - 一個日期物件
 * @returns - 回傳一個字串，表示格式化後的日期
 */
export function formatDate(date: Date): string {
    const formatDate = date.getFullYear() + '-' + timeZeroCheck(date.getMonth()+1) + '-' + timeZeroCheck(date.getDate());

    function timeZeroCheck(num: number) {
        let str = num.toString();
        if (str.length === 1) {
            str = '0' + num;
        }
        return str;
    }

    return formatDate;
}

/**
 * 任務：實作一個函式 `roundNumber`，將數字四捨五入到最接近的整數。
 *
 * 範例：
 * roundNumber(1.5) 應該回傳 2
 *
 * @param num - 一個數字
 * @returns - 回傳一個數字，表示四捨五入後的結果
 */
export function roundNumber(num: number): number {
    return Math.round(num);
}