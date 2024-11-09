let timeLeft = 60;
let timerId = null;
const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent =
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function updateTimer() {
    timeLeft--;
    updateDisplay();

    if (timeLeft === 0) {
        clearInterval(timerId);
        timerId = null;
        startBtn.textContent = '開始';
        // タイマー終了時に音を鳴らす
        const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdYiXo6COdGNfa3GAnJ2gmY+DgHqQoaCknpGbc3NzgZKTlZ6RgGZxh5ycmY+AmGuDjJCTkpWQhHR1eYSXl5OUkIN8gYaarKyemYt6fYiVp6WgjX58k6KipZ2PcHKGnqyrnosAbGJ0h5eVjQBmb32IhwBtdX2DhBB7gH+HMwaRkZqfNRU5P0ZVdRgGFyY6GB8qIAwBBhYeDQkNBQQDIz4+PTUjGQIBChUwPjgxHRQnSWlhlq2dlXpFHh4zRk0jBwgnMS8mRlFZYmR2g4uPlpOXi31CFAwZFQQBqwx+h4yRU0RZxq5wzNLQ0NbT1rdULjlHWbPK2N3V3Y1zOy5DanJ0Yll7AD8CGzE8NDk6AyN+e3JjhZ2jrreCG8vcy9rZz8jN4fbxNz3q8uLd4tjb09bbNTC0U0phWVFAXEBpb3MaAyVKZGZoQEJARFhaREhKU1JhY0k3ZFwwNxkwNUNeRj1+bWBOVW9xfUpGUEBfk5lm4cQJw8jWfJnE0tfX3Mt7wb/O2MfQRhUgDgsaLzM1NgUUEQ8GEgsDCIwRWm6Gj5qcbk1hrcbVYnFfb4h0lJCB2dW+0crIzB0N1dW+0tXZ3t3Yvg/T1drh09vC19vd2ODk3eEPQ0xBTEQKVVNaSVNybP//Z2JohIGNhNrb3BAO1dzX1tXWz9nex8XR2drb1MbSxM/OzsvNDg/NwsnNEA4MEtjVwhDa19DR0dbVzwwMDde5r21qcoJ+h5KYhp2jk5uLjdDX2c3L0tXT1cvK09/j3N3i4dTLz9nSzc7PysvJysbGxcbFxA0QFBvd4fjz99rl5uTg0rrAw8fKwbWioH+xzeH//9PY3uLk5+Ti6urp6Obl4N3ax8bozM/c4dvz6f///97j5+Pn7///9/Hu6OH1/////9GQjYt+ipWYmJibmZmamJl+kpyfpKmoqaepqKakoqChoJ+gnp2enJ2cm5qZmJeXlpWUk5KRkY+Pjo2MjItECAqNjIuUmpybnp2hqK6lpaGgnp2cnJ+kpaynpaKhnZuZlpSQi4N/jZKVlpmbn56Zk4+MioiIPz9FTFdkbXt5kZibm52hhx0dIi0kJi43KBsZLz9NT0VZaXR5kZyOd1Y2EQwWJzxgSEtYVENFSVFUa3BteH6FjrK0xr2oqsz//75UKB8XFRMeIyMYDxMgICgkQ1NifX6VrauyqsjP2dPT09/o+fHt7uzy/fT2+fD17ezf2a2Lo5OFeWRZUU5EMi0qKTEuLy4nJCEcHBYQCwsLEwoKCQYEAwEBAQEJAQEBAQFcAQEBAQEBAQEGI0pTY210fIKKkpmbn6SpqqGgoJ6dnJmYlqKdm5mYlZOSm5mXm5+hoKGWQ1BVWWFoc3uEi5OanqClqaqlqailn52dmpiXlpWUk5OSkZCPjo6NjIuLiomIh4eGhYSEg4OCgoGAgH9/fn59fXx8e3t6enl5eHh3d3Z2dXV0dHNzc3JycXFwcHBvb25ubm1tbW1sbGtramtqamppaWloaGhoZ2dnZ2ZmZWVlZGRkZGNjY2JiYmJhYWFhYGBgYF9fX19eXl5eXV1dXV1dXFxcXFtbW1taWlpaWlpaWVlZWVlZWFhYWFhYWFdXV1dXV1dXV1ZWVlZWVlZWVlVVVVVVVVVVVVVUVFRUVFRUVFRUVFNTU1NTU1NTU1NTU1NTU1JSUlJSUlJSUlJSUlJSUlJSUlJSUlFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFQUFBQUFBQUFFRUVFRUVFRUVFRUVFQUFBQUFBQUFBRUVFRUVFQ=');
        audio.play();
    }
}

function startTimer() {
    if (timerId === null && timeLeft > 0) {
        timerId = setInterval(updateTimer, 1000);
        startBtn.textContent = '一時停止';
    } else {
        clearInterval(timerId);
        timerId = null;
        startBtn.textContent = '開始';
    }
}

function resetTimer() {
    clearInterval(timerId);
    timerId = null;
    timeLeft = 60;
    updateDisplay();
    startBtn.textContent = '開始';
}