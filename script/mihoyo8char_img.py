import os
import utils
import op_file

gid = 8


current_path = os.path.dirname(__file__)
char_img_path = "/../game/public/image/zzz/characters"

json_name = "mhy8char"
json_file = current_path + f"/auto/{json_name}.json"
json_info = op_file.load_dict_from_file(json_file)

CHAR = json_info["CHAR"]



def get_char_img():
    # 用英文资源
    for char in CHAR[1]:
        name = utils.replace_characters(char["char_name"])
        name += ".png"
        url_avatar = char["char_avatar"]
        url_full = char["char_cover_home"]
        avatar_path = current_path + char_img_path + "/" + name
        full_path = current_path + char_img_path + "/full/" + name
        half_path = current_path + char_img_path + "/half/" + name
        utils.wget_img(url_avatar, avatar_path)
        utils.wget_img(url_full, full_path)
        os.system(f'cp {full_path} {half_path}')


get_char_img()