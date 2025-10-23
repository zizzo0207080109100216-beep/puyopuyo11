// Config クラスに追加
class Config {
    // ... 既存の設定 ...
    static gameSpeed = 1000 / 60; // 60 FPS (約16.6ms)
    static slowSpeed = 1000 / 10; // 10 FPS (100ms) - デバッグ用
}

// ------------------------------------------------------------------
// Game クラス内の loop() メソッドを修正
// ------------------------------------------------------------------
class Game {
    // ... 既存のコード ...

    loop() {
        // ... 既存のコード ...

        // 処理の最後に requestAnimationFrame の代わりに setTimeout を使う
        // デバッグの際は Config.slowSpeed を使う
        // requestAnimationFrame(() => this.loop()); // 元のコード
        setTimeout(() => this.loop(), Config.gameSpeed); // 修正後のコード
    }

    // ... 既存のコード ...
}