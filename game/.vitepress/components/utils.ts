
export const getGameName = (game: number) => {
  if (game === 0) return 'genshin'
  if (game === 1) return 'hsr'
}

// tag 0 no handle
// tag 1 weapon text
export const replaceText =
  (str: string, game: number = 0, tag: number = 0) => {
    if (game === 0) {

      if (tag === 1) {
        return '「神铸赋形」活动祈愿'
      }

      return str.replace('x', '祈愿')
    } else if (game === 1) {

      if (tag === 1) {
        return '「流光定影」活动跃迁'
      }

      return str.replace('x', '跃迁')
    }

    return ''
  };

//替换空格 转小写
export const replaceAndLow = (str: string) =>
  str.replace(/ /g, "_").toLowerCase();

//格式化日期
import dayjs from "dayjs";
export const parseDayjs = (date: string) =>
  dayjs(date.toString(), "YYYY-MM-DD HH:mm:ss");
export const formatDayjs = (date: string) =>
  parseDayjs(date).format("YYYY-MM-DD HH:mm");

export const normalizeName = (name: string) =>
  name.toLowerCase().replace(/\s+/g, '')


//秒转换
export const secondsFormat = (s) => {
  const day = Math.floor(s / (24 * 3600)); // Math.floor()向下取整
  const hour = Math.floor((s - day * 24 * 3600) / 3600);
  const minute = Math.floor((s - day * 24 * 3600 - hour * 3600) / 60);
  const second = s - day * 24 * 3600 - hour * 3600 - minute * 60;
  if (day < 0 || hour < 0 || minute < 0 || second < 0) return -1;
  return day + "天" + hour + "时" + minute + "分" + second + "秒";
};

export const getDeadline = (start, end) => secondsFormat(Math.floor(end.diff(start) / 1000));

//返回始末时间之间的所有日期
export const getDuration = (type: string, start: Date, end: Date): Date[] => {
  const $array: Date[] = [];
  let current = new Date(start);
  end = new Date(end);
  while (current <= end) {
    $array.push(new Date(current));
    if (type == "hour") {//小时
      current.setHours(current.getHours() + 1);
    } else if (type == "day") {//天
      current.setDate(current.getDate() + 1);
    } else if (type == "week") {//周
      current.setDate(current.getDate() + 7);
    } else if (type == "month") {//月
      current.setMonth(current.getMonth() + 1);
    } else {//默认天
      current.setDate(current.getDate() + 1);
    }
  }
  return $array;
};

// https://stackoverflow.com/questions/5072136/javascript-filter-for-objects
export const objFilter = (obj, predicate) =>
  Object.keys(obj)
    .filter(key => predicate(obj[key]))
    .reduce((res, key) => (res[key] = obj[key], res), {});

export const filterObject = (obj, callback) =>
  Object.fromEntries(Object.entries(obj)
    .filter(([key, val]) => callback(val, key)));

