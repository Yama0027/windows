document.addEventListener('DOMContentLoaded', () => {
    // 1から11までのボタンとオーディオ要素をまとめて処理
    for (let i = 1; i <= 11; i++) { // ここを11に変更
        const buttonId = `playSoundButton${i}`;
        const audioId = `audio${i}`;

        const playSoundButton = document.getElementById(buttonId);
        const myAudio = document.getElementById(audioId);

        // ボタンが見つかり、オーディオ要素も存在する場合のみイベントリスナーを設定
        if (playSoundButton && myAudio) {
            playSoundButton.addEventListener('click', () => {
                // 現在再生中の音があれば停止し、先頭から再生
                if (!myAudio.paused) {
                    myAudio.pause();
                    myAudio.currentTime = 0;
                }
                myAudio.play()
                    .then(() => {
                        console.log(`音 ${i} が再生されました！`);
                    })
                    .catch(error => {
                        console.error(`音 ${i} の再生中にエラーが発生しました:`, error);
                        // 再生がブロックされるなどのエラー処理
                    });
            });
        } else {
            console.warn(`ID "${buttonId}" または "${audioId}" が見つかりませんでした。HTMLを確認してください。`);
        }
    }
});