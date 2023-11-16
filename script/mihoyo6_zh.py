# 6 means hsr
# 米游社接口

import json
import requests
from bs4 import BeautifulSoup
import re


def get_url_data(api_url):
    response = requests.get(api_url)
    data = response.json()
    return data

api_prefix = 'https://bbs-api.miyoushe.com/post/wapi/'

api_url_news_list = api_prefix + 'getNewsList'
api_url_post_full = api_prefix + 'getPostFull'

api_url_news_list += '?gids=6'
# https://augusmeow.github.io/code/api/mihoyo
# type: 1 公告 2 活动 3 资讯
# 星穹铁道 跃迁在公告分类里
api_url_news_list += '&type=1'
api_url_news_list += '&page_size=50'

data = get_url_data(api_url_news_list)
json_str = json.dumps(data['data']['list'])
data_dict = json.loads(json_str)

print(api_url_news_list)

# print(data_dict)

# get
# {
#   name: ['', 'Butterfly on Swordtip'],
#   image: [1, 2],
#   shortName: ['Topaz & Numby', 'Seele'],
#   start: '2023-10-29 10:00:00 +0800',
#   end: '2023-11-15 17:59:59 +0800',
#   version: '1.4',
#   wish5star: ['topaz_numby', 'seele'],
#   wish4star: ['guinaifen', 'Luka', 'Sushang'],
#   wishName: ['「落日条款」', '「蝶立锋锷」'],
#   url: ['']
# },



# 0 char 1 weapon
warp_arr = [[], []]

for obj in data_dict:

    pattern_char = '角色活动跃迁'
    match_char = re.search(pattern_char, obj['post']['subject'], re.IGNORECASE)
    if match_char:
        warp_arr[0].append(obj)

    pattern_lc = '光锥活动跃迁'
    match_lc = re.search(pattern_lc, obj['post']['subject'], re.IGNORECASE)
    if match_lc:
        warp_arr[1].append(obj)

post_id_arr = [[], []]
idx = 0


for warp_info in warp_arr:

    for get_warp in warp_info:

        subject = get_warp['post']['structured_content']
        # 先去除可能的转义字符
        subject = subject.replace('\\\\', '\\')
        data_subject = json.loads(subject)
        inserts = [item["insert"] for item in data_subject if "insert" in item and isinstance(item["insert"], str)]
        merged_string = "".join(inserts)
        # print(merged_string)

        matches = re.findall(r'「(.*?)」', merged_string, re.DOTALL)
        print(matches)


        img_url = get_warp['post']['images']


        # print('subject', subject)
        # print('subject_zh', subject_zh)
        print('img_url', img_url)
        # print('post_id', post_id)

        # img_type = img_url[img_url[0].rfind('.', 0):]
        # print('img_type', img_type)
        # image_times = '1'

        # # modify_subject = subject.split('"')[1].lower().replace(' ', '_')
        # modify_subject = subject.split(':')[0].lower().replace(' ', '_')
        # modify_subject += '_' + image_times + img_type
        # print('modify_subject', modify_subject)

        print('============')

    idx = idx + 1
    print('============')

print('post_id_arr', post_id_arr)
