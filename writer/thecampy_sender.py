import thecampy

soldier = thecampy.Soldier('박해영', 2000_09_03, 2022_01_17, '12사단')
user_id = 'chunccc1004@naver.com'
with open('C:\\Users\\user\\PycharmProjects\\the_camp_api_test\\soldier-link\\writer\\thecampy_pw.txt', 'r') as f:
    user_pw = f.read().strip()


def send(message):
    try:
        title, content = message.get_header(), message.content
        content = '<p>' + content.replace('\n', '</p><p>') + '</p>'
        content = content.replace('<p></p>', '<p>&nbsp</p>')

        msg = thecampy.Message(title, content)
        tc = thecampy.client()
        tc.login(user_id, user_pw)

        tc.get_soldier(soldier)
        send_result = tc.send_message(soldier, msg)

        message.sent = True
        return True

    except Exception as p:
        return False

    finally:
        message.send_attempt_over = True
        message.save()
