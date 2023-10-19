document.addEventListener('DOMContentLoaded', function () {
    const happy = document.getElementById('range-input-1').value*3 + 50,
    calm = document.getElementById('range-input-2').value - 50,
    sent = -document.getElementById('range-input-3').value*2 - 150
    const musicListTable = document.querySelector('#musicList table');
    const sum = happy + calm + sent;
    var selectedTheme = "";

    if (sum > 250) selectedTheme = "에너지";
    else if (sum > 200) selectedTheme = "신남";
    else if (sum > 150) selectedTheme = "여행";
    else if (sum > 100) selectedTheme = "사랑";
    else if (sum > 50) selectedTheme = "꿈";
    else if (sum > 0) selectedTheme = "산책";
    else if (sum > -100) selectedTheme = "위로";
    else if (sum > -200) selectedTheme = "밤";
    else if (sum > -250) selectedTheme = "이별";
    else selectedTheme = "산책";
    

    // 초기 추천 리스트 표시 함수 호출
    displayDefaultRecommendations();

    themeForm.addEventListener('submit', function (e) {
        e.preventDefault();
        console.log(selectedTheme)

        // TODO: AJAX 요청을 사용하여 db.php에 선택한 테마를 전달하고 음악 목록을 가져오세요.
        // 가져온 음악 목록을 테이블에 표시하세요.

        fetch(`db.php?theme=${selectedTheme}`)
            .then(response => response.json())
            .then(data => {
                // 테이블 초기화
                musicListTable.innerHTML = '';
                musicListTable.removeAttribute("hidden")

                // 각 음악 데이터를 테이블에 추가
                data.forEach(function (musicData) {
                    const newRow1 = document.createElement('tr');
                    newRow1.innerHTML = `
                        <td rowspan='4'><img src="${musicData.image}" alt="음악 이미지"></td>
                    `;
                    musicListTable.appendChild(newRow1);

                    const newRow2 = document.createElement('tr');
                    newRow2.innerHTML = `
                    <td>${musicData.title}</td>

                    `;
                    musicListTable.appendChild(newRow2);

                    const newRow3 = document.createElement('tr');
                    newRow3.innerHTML = `
                    <td>${musicData.artist}</td>
                    `;
                    musicListTable.appendChild(newRow3);

                    const newRow4 = document.createElement('tr');
                    newRow4.innerHTML = `
                    <td rowspan='2' id='playerCell'><audio controls><source src="${musicData.url}" type="audio/mpeg">Your browser does not support the audio element.</audio></td>
                    `;
                    musicListTable.appendChild(newRow4);
                });



            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    });

    // 기본 추천 리스트 표시 함수
    function displayDefaultRecommendations() {
        // TODO: 페이지가 로드될 때 기본 추천 리스트를 표시하는 코드를 작성하세요.
        // 예제 데이터를 이용하거나, 서버에서 가져와서 표시하세요.
    }
});

