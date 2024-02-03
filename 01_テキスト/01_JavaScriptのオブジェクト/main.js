const me = {
  name: "よーへい",
  age: 23,
  hobbies: ["ゲーム", "ドライブ", "カクテル作り", "料理"],
  isHappy: true,
  address: {
    country: "日本",
    city: "滋賀",
  },
  sayHello: function () {
    console.log("温泉がない方の草津にいます")
  },
}

console.log(me)
me.sayHello()
// TRY: 練習問題１
// hikakin オブジェクト を真似して自分のプロフィールをオブジェクトで作ってください。
// オブジェクトにはたくさんのプロパティを追加してください。

// const me = { name: 'あなたのなまえ' }

// ブラウザのコンソールを開いてオブジェクトが正しく作れているか確認してみましょう👀

// console.log(me)

// TRY: 練習問題２
// hikakin オブジェクトに入っている sayHello メソッドを実行してください。
