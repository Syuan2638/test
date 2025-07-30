document.addEventListener('DOMContentLoaded', () => {
    // --- 獲取所有元素 ---
    const envelopePage = document.getElementById('envelope-page');
    const letterPage = document.getElementById('letter-page');
    const gameContainer = document.getElementById('game-container');
    const endingPage = document.getElementById('ending-page');
    const continueToGameButton = document.getElementById('continue-to-game-button');
    const finalPuzzle = document.getElementById('final-puzzle');
    const magicInput = document.getElementById('magic-input');
    const gameBoardElement = document.getElementById('game-board');
    const minesCountElement = document.getElementById('mines-count');
    const resetButton = document.getElementById('reset-button');
    const penaltyTimerElement = document.getElementById('penalty-timer');
    const hintContainerElement = document.getElementById('hint-container');
    const toolPopup = document.getElementById('tool-popup');
    const toolShovel = document.getElementById('tool-shovel');
    const toolFlag = document.getElementById('tool-flag');

    // --- 開場動畫事件 ---
    envelopePage.addEventListener('click', () => {
        envelopePage.classList.add('hidden');
        letterPage.classList.remove('hidden');
        setTimeout(() => { continueToGameButton.classList.remove('hidden'); }, 30000);
    });
    continueToGameButton.addEventListener('click', () => {
        letterPage.classList.add('hidden');
        gameContainer.classList.remove('hidden');
        startGame();
    });

    // --- 遊戲設定 ---
    const BOARD_WIDTH = 15, BOARD_HEIGHT = 5;
    const MINE_LOCATIONS = [
        { r: 0, c: 0 }, { r: 4, c: 0 }, { r: 0, c: 1 }, { r: 1, c: 1 }, { r: 2, c: 1 }, { r: 3, c: 1 }, { r: 4, c: 1 },
        { r: 0, c: 2 }, { r: 4, c: 2 }, { r: 1, c: 3 }, { r: 0, c: 4 }, { r: 2, c: 4 }, { r: 3, c: 5 }, { r: 1, c: 6 },
        { r: 4, c: 6 }, { r: 3, c: 7 }, { r: 0, c: 8 }, { r: 2, c: 8 }, { r: 1, c: 9 }, { r: 0, c: 10 }, { r: 1, c: 11 },
        { r: 2, c: 12 }, { r: 3, c: 12 }, { r: 4, c: 12 }, { r: 1, c: 13 }, { r: 0, c: 14 }
    ];
    const MINE_COUNT = MINE_LOCATIONS.length;
    
    // --- 遊戲狀態變數 ---
    let board = [], flags = 0, gameOver = false, countdownInterval = null;
    let isHintActive = false, hintProgress = 0, hintPathElements = [];
    let activeCellForPopup = null;
    let usePaperForNextThree = true; 
    // 修改：用一個變數取代 failureCount 和 isHintEverShown
    let firstMistakeMade = false;

    // --- 事件監聽 ---
    toolShovel.addEventListener('click', () => {
        if (activeCellForPopup) {
            const { r, c } = activeCellForPopup;
            const cellData = board[r][c];
            if (cellData.isFlagged) { closeToolPopup(); return; }

            // --- 修改：全新的失敗處理邏輯 ---
            if (cellData.isMine) {
                if (!firstMistakeMade) {
                    // 第一次犯錯：顯示提示，不重置
                    firstMistakeMade = true;
                    // 揭開這個地雷格
                    cellData.isRevealed = true;
                    cellData.element.classList.add('revealed', 'mine');
                    // 顯示並激活提示
                    hintContainerElement.classList.remove('hidden');
                    isHintActive = true;
                } else {
                    // 第二次及之後的犯錯：爆炸並重置
                    triggerExplosionAndReset();
                }
            } else { 
                // 點到安全格
                revealCell(r, c); 
                checkWinCondition(); 
            }
            closeToolPopup();
        }
    });
    toolFlag.addEventListener('click', () => { /* ... (不變) ... */ });
    window.addEventListener('click', (event) => { /* ... (不變) ... */ });
    magicInput.addEventListener('input', (event) => { /* ... (不變) ... */ });

    // --- 核心遊戲函數 ---
    function resetBoard() { /* ... (不變) ... */ }
    
    function startGame() {
        clearInterval(countdownInterval);
        gameBoardElement.classList.remove('locked');
        penaltyTimerElement.classList.add('hidden');
        finalPuzzle.classList.add('hidden');
        magicInput.value = '';
        magicInput.disabled = false;
        usePaperForNextThree = true;
        isHintActive = false;
        hintProgress = 0;
        // 修改：重置新狀態
        firstMistakeMade = false;
        // 總是隱藏提示，直到第一次犯錯
        hintContainerElement.classList.add('hidden');
        resetBoard();
        resetButton.addEventListener('click', () => {
            if (!endingPage.classList.contains('hidden')) {
                endingPage.classList.add('hidden');
                gameContainer.classList.remove('hidden');
            }
            startGame();
        });
    }

    function createBoardElement() { /* ... (不變) ... */ }
    function handleCellClick(r, c, event) { /* ... (不變) ... */ }
    function toggleFlag(r, c) { /* ... (不變) ... */ }
    function closeToolPopup() { /* ... (不變) ... */ }
    function revealCell(r, c, isInitial = false) { /* ... (不變) ... */ }
    function calculateAdjacentMines(r, c) { /* ... (不變) ... */ }
    function checkWinCondition() { /* ... (不變) ... */ }
    function endGame(isWin) { /* ... (不變) ... */ }
    function triggerExplosionAndReset() { /* ... (不變) ... */ }
    
    // --- 修改：移除舊的懲罰函數 ---
    // function startPenaltyForHint() { ... } (此函數已移除)
    
    function revealHintReward() { /* ... (不變) ... */ }

    // --- 為所有不變的函數提供完整程式碼 ---
    // (將所有之前版本的函數複製到這裡)
});


// ==========================================================
// ============ 下方是完整的、未經折疊的 script.js ===========
// ==========================================================
document.addEventListener('DOMContentLoaded', () => {
    const envelopePage = document.getElementById('envelope-page');
    const letterPage = document.getElementById('letter-page');
    const gameContainer = document.getElementById('game-container');
    const endingPage = document.getElementById('ending-page');
    const continueToGameButton = document.getElementById('continue-to-game-button');
    const finalPuzzle = document.getElementById('final-puzzle');
    const magicInput = document.getElementById('magic-input');
    const gameBoardElement = document.getElementById('game-board');
    const minesCountElement = document.getElementById('mines-count');
    const resetButton = document.getElementById('reset-button');
    const penaltyTimerElement = document.getElementById('penalty-timer');
    const hintContainerElement = document.getElementById('hint-container');
    const toolPopup = document.getElementById('tool-popup');
    const toolShovel = document.getElementById('tool-shovel');
    const toolFlag = document.getElementById('tool-flag');

    envelopePage.addEventListener('click', () => {
        envelopePage.classList.add('hidden');
        letterPage.classList.remove('hidden');
        setTimeout(() => { continueToGameButton.classList.remove('hidden'); }, 30000);
    });
    continueToGameButton.addEventListener('click', () => {
        letterPage.classList.add('hidden');
        gameContainer.classList.remove('hidden');
        startGame();
    });

    const BOARD_WIDTH = 15, BOARD_HEIGHT = 5;
    const MINE_LOCATIONS = [
        { r: 0, c: 0 }, { r: 4, c: 0 }, { r: 0, c: 1 }, { r: 1, c: 1 }, { r: 2, c: 1 }, { r: 3, c: 1 }, { r: 4, c: 1 },
        { r: 0, c: 2 }, { r: 4, c: 2 }, { r: 1, c: 3 }, { r: 0, c: 4 }, { r: 2, c: 4 }, { r: 3, c: 5 }, { r: 1, c: 6 },
        { r: 4, c: 6 }, { r: 3, c: 7 }, { r: 0, c: 8 }, { r: 2, c: 8 }, { r: 1, c: 9 }, { r: 0, c: 10 }, { r: 1, c: 11 },
        { r: 2, c: 12 }, { r: 3, c: 12 }, { r: 4, c: 12 }, { r: 1, c: 13 }, { r: 0, c: 14 }
    ];
    const MINE_COUNT = MINE_LOCATIONS.length;
    
    let board = [], flags = 0, gameOver = false, countdownInterval = null;
    let isHintActive = false, hintProgress = 0, hintPathElements = [];
    let activeCellForPopup = null;
    let usePaperForNextThree = true;
    let firstMistakeMade = false;

    toolShovel.addEventListener('click', () => {
        if (activeCellForPopup) {
            const { r, c } = activeCellForPopup;
            const cellData = board[r][c];
            if (cellData.isFlagged) { closeToolPopup(); return; }

            if (cellData.isMine) {
                if (!firstMistakeMade) {
                    firstMistakeMade = true;
                    cellData.isRevealed = true;
                    cellData.element.classList.add('revealed', 'mine');
                    hintContainerElement.classList.remove('hidden');
                    isHintActive = true;
                } else {
                    triggerExplosionAndReset();
                }
            } else { 
                revealCell(r, c); 
                checkWinCondition(); 
            }
            closeToolPopup();
        }
    });
    toolFlag.addEventListener('click', () => {
        if (activeCellForPopup) {
            const { r, c } = activeCellForPopup;
            toggleFlag(r, c);
            checkWinCondition();
            closeToolPopup();
        }
    });
    window.addEventListener('click', (event) => {
        if (!toolPopup.classList.contains('hidden') && !toolPopup.contains(event.target) && !event.target.classList.contains('cell')) {
            closeToolPopup();
        }
    });
    magicInput.addEventListener('input', (event) => {
        const rawInput = event.target.value;
        const cleanedInput = rawInput.toUpperCase().replace(/\s/g, '');
        if (cleanedInput === 'ILOVEYOU') {
            magicInput.disabled = true;
            setTimeout(() => {
                gameContainer.classList.add('hidden');
                endingPage.classList.remove('hidden');
            }, 500);
        }
    });

    function resetBoard() {
        gameOver = false;
        flags = 0;
        hintPathElements.forEach(el => el.classList.remove('hint-step-active'));
        hintPathElements = [];
        closeToolPopup();
        board = [];
        gameBoardElement.innerHTML = '';
        gameBoardElement.style.gridTemplateColumns = `repeat(${BOARD_WIDTH}, 24px)`;
        minesCountElement.textContent = MINE_COUNT;
        
        for (let r = 0; r < BOARD_HEIGHT; r++) {
            const row = [];
            for (let c = 0; c < BOARD_WIDTH; c++) {
                const cell = { isMine: false, isRevealed: false, isFlagged: false, element: null, adjacentMines: 0, isInitialThree: false };
                row.push(cell);
            }
            board.push(row);
        }
        MINE_LOCATIONS.forEach(loc => {
            if (loc.r < BOARD_HEIGHT && loc.c < BOARD_WIDTH) {
                board[loc.r][loc.c].isMine = true;
            }
        });
        for (let r = 0; r < BOARD_HEIGHT; r++) {
            for (let c = 0; c < BOARD_WIDTH; c++) {
                if (!board[r][c].isMine) {
                    board[r][c].adjacentMines = calculateAdjacentMines(r, c);
                }
            }
        }
        createBoardElement();

        const allThreesCoords = [];
        for (let r = 0; r < BOARD_HEIGHT; r++) {
            for (let c = 0; c < BOARD_WIDTH; c++) {
                if (board[r][c].adjacentMines === 3 && !board[r][c].isMine) {
                    allThreesCoords.push({ r, c });
                }
            }
        }
        const numInitialThrees = Math.floor(allThreesCoords.length / 3);
        const initialThreesToReveal = allThreesCoords.slice(0, numInitialThrees);
        initialThreesToReveal.forEach(coord => {
            board[coord.r][coord.c].isInitialThree = true;
        });

        for (let r = 0; r < BOARD_HEIGHT; r++) {
            for (let c = 0; c < BOARD_WIDTH; c++) {
                const cell = board[r][c];
                if (!cell.isMine && (cell.adjacentMines === 0 || cell.adjacentMines === 5 || cell.isInitialThree)) {
                    revealCell(r, c, true);
                }
            }
        }
        
        const ADDITIONAL_INITIAL_CELLS = [{ r: 3, c: 11 }, { r: 1, c: 0 }, { r: 2, c: 0 }];
        ADDITIONAL_INITIAL_CELLS.forEach(coord => {
            if (board[coord.r] && board[coord.r][coord.c] && !board[coord.r][coord.c].isMine) {
                revealCell(coord.r, coord.c, true);
            }
        });
    }

    function startGame() {
        clearInterval(countdownInterval);
        gameBoardElement.classList.remove('locked');
        penaltyTimerElement.classList.add('hidden');
        finalPuzzle.classList.add('hidden');
        magicInput.value = '';
        magicInput.disabled = false;
        usePaperForNextThree = true;
        isHintActive = false;
        hintProgress = 0;
        firstMistakeMade = false;
        hintContainerElement.classList.add('hidden');
        resetBoard();
        resetButton.addEventListener('click', () => {
            if (!endingPage.classList.contains('hidden')) {
                endingPage.classList.add('hidden');
                gameContainer.classList.remove('hidden');
            }
            startGame();
        });
    }

    function createBoardElement() {
        for (let r = 0; r < BOARD_HEIGHT; r++) {
            for (let c = 0; c < BOARD_WIDTH; c++) {
                const cellElement = document.createElement('div');
                cellElement.classList.add('cell');
                cellElement.dataset.row = r;
                cellElement.dataset.col = c;
                cellElement.addEventListener('click', (event) => {
                    event.stopPropagation();
                    handleCellClick(r, c, event);
                });
                board[r][c].element = cellElement;
                gameBoardElement.appendChild(cellElement);
            }
        }
    }
    
    function handleCellClick(r, c, event) {
        if (gameOver) return;
        if (isHintActive) {
            const cell = board[r][c];
            if (cell.isRevealed) {
                let sequenceAdvanced = false;
                if (hintProgress === 0 && cell.element.querySelector('img[alt="比特幣"]')) {
                    hintProgress = 1; sequenceAdvanced = true;
                } else if (hintProgress === 1 && cell.element.querySelector('img[alt="Litecoin"]')) {
                    revealHintReward(); return;
                }
                if (sequenceAdvanced) {
                    cell.element.classList.add('hint-step-active');
                    hintPathElements.push(cell.element);
                    return;
                }
            }
        }
        if (board[r][c].isRevealed) {
            closeToolPopup();
            return;
        }
        activeCellForPopup = { r, c };
        const rect = event.target.getBoundingClientRect();
        toolPopup.style.top = `${window.scrollY + rect.bottom + 5}px`;
        toolPopup.style.left = `${window.scrollX + rect.left + rect.width / 2 - toolPopup.offsetWidth / 2}px`;
        toolPopup.classList.remove('hidden');
    }
    
    function toggleFlag(r, c) {
        if (gameOver || board[r][c].isRevealed) return;
        const cell = board[r][c];
        const cellElement = cell.element;
        if (cell.isFlagged) {
            const flagImg = cellElement.querySelector('.flag-icon');
            if (flagImg) cellElement.removeChild(flagImg);
            cell.isFlagged = false;
            flags--;
        } else {
            const flagImg = document.createElement('img');
            flagImg.src = 'images/flag.png';
            flagImg.alt = '旗子';
            flagImg.classList.add('flag-icon');
            cellElement.appendChild(flagImg);
            cell.isFlagged = true;
            flags++;
        }
        minesCountElement.textContent = MINE_COUNT - flags;
    }

    function closeToolPopup() {
        toolPopup.classList.add('hidden');
        activeCellForPopup = null;
    }

    function revealCell(r, c, isInitial = false) {
        if (r < 0 || r >= BOARD_HEIGHT || c < 0 || c >= BOARD_WIDTH || board[r][c].isRevealed) return;
        const cell = board[r][c];
        cell.isRevealed = true;
        cell.element.classList.add('revealed');
        if (cell.isFlagged) toggleFlag(r, c);
        
        const img = document.createElement('img');
        img.classList.add('crypto-icon');
        let hasCustomImage = true;
        if (cell.adjacentMines === 1) {
            img.src = 'images/bitcoin.png'; img.alt = '比特幣';
        } else if (cell.adjacentMines === 2) {
            img.src = 'images/ethereum.png'; img.alt = '以太幣';
        } else if (cell.adjacentMines === 3) {
            if (cell.isInitialThree) {
                hasCustomImage = false;
            } else {
                if (usePaperForNextThree) {
                    img.src = 'images/paper.png'; img.alt = 'Paper';
                } else {
                    img.src = 'images/polkadot.png'; img.alt = '波卡';
                }
                usePaperForNextThree = !usePaperForNextThree;
            }
        } else if (cell.adjacentMines === 4) {
            img.src = 'images/Litecoin.png'; img.alt = 'Litecoin';
        } else {
            hasCustomImage = false;
        }
        if (hasCustomImage) {
            cell.element.appendChild(img);
        } else if (cell.adjacentMines > 0) {
            cell.element.textContent = cell.adjacentMines;
            cell.element.dataset.mines = cell.adjacentMines;
        } else {
            for (let dr = -1; dr <= 1; dr++) {
                for (let dc = -1; dc <= 1; dc++) {
                    if (dr === 0 && dc === 0) continue;
                    revealCell(r + dr, c + dc, isInitial);
                }
            }
        }
    }
    
    function calculateAdjacentMines(r, c) {
        let count = 0;
        for (let dr = -1; dr <= 1; dr++) {
            for (let dc = -1; dc <= 1; dc++) {
                if (dr === 0 && dc === 0) continue;
                const newR = r + dr;
                const newC = c + dc;
                if (newR >= 0 && newR < BOARD_HEIGHT && newC >= 0 && newC < BOARD_WIDTH && board[newR][newC].isMine) {
                    count++;
                }
            }
        }
        return count;
    }
    
    function checkWinCondition() {
        if (gameOver) return;
        let revealedNonMineCount = 0;
        let correctlyFlaggedMines = 0;
        let totalFlags = 0;
        for (let r = 0; r < BOARD_HEIGHT; r++) {
            for (let c = 0; c < BOARD_WIDTH; c++) {
                const cell = board[r][c];
                if (cell.isRevealed && !cell.isMine) {
                    revealedNonMineCount++;
                }
                if (cell.isFlagged) {
                    totalFlags++;
                    if (cell.isMine) {
                        correctlyFlaggedMines++;
                    }
                }
            }
        }
        const allNonMinesRevealed = revealedNonMineCount === (BOARD_WIDTH * BOARD_HEIGHT) - MINE_COUNT;
        const allMinesFlagged = (correctlyFlaggedMines === MINE_COUNT) && (totalFlags === MINE_COUNT);
        if (allNonMinesRevealed || allMinesFlagged) {
            endGame(true);
        }
    }
    
    function endGame(isWin) {
        gameOver = true;
        closeToolPopup();
        if (isWin) {
            for (let r = 0; r < BOARD_HEIGHT; r++) {
                for (let c = 0; c < BOARD_WIDTH; c++) {
                    const cell = board[r][c];
                    if (!cell.isRevealed) {
                        cell.isRevealed = true;
                        cell.element.classList.add('revealed');
                    }
                    cell.element.innerHTML = '';
                    if (cell.isMine) {
                        const heartImg = document.createElement('img');
                        heartImg.src = 'images/heart.png';
                        heartImg.alt = '愛心';
                        heartImg.classList.add('heart-icon');
                        cell.element.appendChild(heartImg);
                    }
                }
            }
            finalPuzzle.classList.remove('hidden');
        }
    }

    function triggerExplosionAndReset() {
        gameOver = true;
        closeToolPopup();
        gameBoardElement.classList.add('locked');
        document.body.classList.add('explosion-shake');
        for (let r = 0; r < BOARD_HEIGHT; r++) {
            for (let c = 0; c < BOARD_WIDTH; c++) {
                if (board[r][c].isMine) {
                    const mineCell = board[r][c].element;
                    mineCell.innerHTML = '';
                    mineCell.classList.add('mine');
                }
            }
        }
        setTimeout(() => {
            document.body.classList.remove('explosion-shake');
            startGame();
        }, 800);
    }

    function revealHintReward() {
        alert('邏輯謎題解決！一條線索已被揭示！');
        isHintActive = false;
        hintProgress = 0;
        hintPathElements.forEach(el => el.classList.remove('hint-step-active'));
        hintPathElements = [];
        const rewardCells = [{r: 2, c: 5}, {r: 2, c: 9}];
        rewardCells.forEach(cell => {
            if (board[cell.r][cell.c] && !board[cell.r][cell.c].isRevealed) {
                revealCell(cell.r, cell.c);
            }
        });
        checkWinCondition();
    }
});
