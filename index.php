<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>음악 추천 시스템</title>
    <link rel="stylesheet" type="text/css" href="styles.css?after"> <!-- CSS 파일 링크 -->
    <link rel="shortcut icon" href="favicon-32x32.png" />
</head>
<body>
<div class="menu-container">
    <a href="/index.php">새로고침</a>
</div>
<center>
    <h1><img id="logo" src="/muzik_logo.png" alt="Non-Song" style="margin-top: 50px;"></h1>
    <hr>
    <h3>Find Your Music Taste</h3>
    <br>

    <div class="container">
    <p>행복</p>
         <div class="range">
            <div class="range__content">
               <div class="range__slider">
                  <div class="range__slider-line"" id="range-line-1""></div>
               </div>
               
               <div class="range__thumb" id="range-thumb-1">
                  <div class="range__value">
                     <span class="range__value-number" id="range-number-1">50</span>
                  </div>
               </div>
   
                <input type="range" class="range__input" id="range-input-1" min="0" max="100" value="50" step="1">
            </div>
        </div>
    </div>

    <div class="container">
        <p>차분</p>
            <div class="range">
                <div class="range__content">
                <div class="range__slider">
                    <div class="range__slider-line" id="range-line-2"></div>
                </div>
                
                <div class="range__thumb" id="range-thumb-2">
                    <div class="range__value">
                        <span class="range__value-number" id="range-number-2">50</span>
                    </div>
                </div>
    
                    <input type="range" class="range__input" id="range-input-2" min="0" max="100" value="50" step="1">
                </div>
            </div>
    </div>

    <div class="container">
    <p>센치</p>

         <div class="range">
            <div class="range__content">
               <div class="range__slider">
                  <div class="range__slider-line" id="range-line-3"></div>
               </div>
               
               <div class="range__thumb" id="range-thumb-3">
                  <div class="range__value">
                     <span class="range__value-number" id="range-number-3">50</span>
                  </div>
               </div>
   
                <input type="range" class="range__input" id="range-input-3" min="0" max="100" value="50" step="1">
            </div>
        </div>
    </div>

    <form id="themeForm">
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

