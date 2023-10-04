document.addEventListener('DOMContentLoaded', function () {
    const themeForm = document.getElementById('themeForm');
    const musicListTable = document.querySelector('#musicList table');

    // 초기 추천 리스트 표시 함수 호출
    displayDefaultRecommendations();

    themeForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const selectedTheme = document.getElementById('themeSelect').value;
        console.log(selectedTheme)

        // TODO: AJAX 요청을 사용하여 db.php에 선택한 테마를 전달하고 음악 목록을 가져오세요.
        // 가져온 음악 목록을 테이블에 표시하세요.

        // AJAX 요청 예시 (수정이 필요함)
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
