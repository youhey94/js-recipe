// TRY: 練習問題 １
const plus1 = function (x) {
  return x + 1
}
plus1()
// 関数名:
// 引数:
// 返り値:

// TRY: 練習問題 ２
// f1: 1, 4, 7, 10, 13, 16, ...

const f1 = function (y) {
  return 3 * y - 2
}
f1()
document.write(f1)

// f2: 1, 10, 100, 1000, 10000, ...
const f2 = function (y) {
  return 10 ** y
}
f2()
document.write(f2)

// f3: 2, 14, 107, 1010, 10013, ...
const f3 = function (y) {
  return f1(y) + f2(y)
}
f3()
document.write(f3)
// TRY: 練習問題３
// ① ２つの引数を受け取り、それらをかけ合わせた値を返す関数 multiply を作成して正しく動くかテストしてください。

// ② ２つの引数を受け取り、それらを足し合わせた結果を四捨五入した値を返す関数 plusRound を作成して正しく動くかテストしてください。
