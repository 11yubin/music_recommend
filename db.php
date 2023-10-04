<?php
// 데이터베이스 연결 설정
$host = "3.81.172.132"; // 데이터베이스 호스트 주소
$username = "user"; // 데이터베이스 사용자 이름
$password = "supporters2023!"; // 데이터베이스 암호
$database = "music"; // 데이터베이스 이름

// MySQL 데이터베이스에 연결
$con = mysqli_connect($host, $username, $password, $database);

// 연결 여부 확인
if (!$con) {
    die("MySQL 연결 실패: " . mysqli_connect_error());
}

// POST로 받은 테마를 기반으로 음악을 추천합니다.
if (isset($_GET['theme'])) {
    $selectedTheme = $_GET['theme'];

    // 데이터베이스에서 선택한 테마에 따른 음악 정보를 가져오는 쿼리를 작성
    // $query = "SELECT image, title, artist, url FROM music WHERE tag = '$selectedTheme' ORDER BY RAND() LIMIT 10";
    $query = "SELECT image, title, artist, url FROM music WHERE artist = '$selectedTheme' ORDER BY RAND() LIMIT 10";
    
    $result = mysqli_query($con, $query);
    
    // 결과를 배열로 저장
    $musicList = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $musicList[] = $row;
    }
    
    // JSON 형식으로 출력
    header('Content-Type: application/json');
    echo json_encode($musicList);
}

// 데이터베이스 연결 종료
mysqli_close($con);
?>
