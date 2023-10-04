<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>음악 추천 시스템</title>
    <link rel="stylesheet" type="text/css" href="styles.css"> <!-- CSS 파일 링크 -->
</head>
<body>
<div class="menu-container">
    <a href="/index.php">새로고침</a>
</div>
<center>
    <h1><img id="logo" src="/muzik_logo.png" alt="Non-Song" style="margin-top: 50px;"></h1>
    <h3>Find Your Music Taste</h3>
    <hr>
    <br>
    <!-- 선택 옵션과 버튼 -->
    <form id="themeForm">
        <select id="themeSelect" name="theme">
            <option value="Red Velvet">레드벨벳</option>
            <option value="enhypen">엔하이픈</option>
            <option value="아이유">아이유</option>
            <option value="김동률">김동률</option>
            <!-- 나머지 가수 항목들도 추가 -->
        </select>
        <button type="submit">음악 추천 받기</button>
    </form>

    <!-- 음악 목록 표시 -->
    <div id="musicList">
        <ul>

            <br>
            <table hidden id="musicTable">
            </table>
            <br><br>
        </ul>
    </div>
</center>

<!-- JavaScript 파일 연결 -->
<script src="scripts.js"></script>
</body>
</html>

