const buf = Buffer.from('Aa','ascii');

console.log(buf.join());
console.log(buf.toString());

const buffer1 = Buffer.from('aa','utf8');
console.log(buf.equals(buffer1));
console.log(buf.compare(buffer1));

var arr = [buf,buffer1];
console.log(arr.sort(Buffer.compare));

console.log(String.fromCharCode(49));
console.log(String.fromCharCode(1));

// 创建一个长度为 10、且用 0 填充的 Buffer。
const buf1 = Buffer.alloc(10);

// 创建一个长度为 10、且用 0x1 填充的 Buffer。 
const buf2 = Buffer.alloc(10, 1);

// 创建一个长度为 10、且未初始化的 Buffer。
// 这个方法比调用 Buffer.alloc() 更快，
// 但返回的 Buffer 实例可能包含旧数据，
// 因此需要使用 fill() 或 write() 重写。
const buf3 = Buffer.allocUnsafe(10);

// 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
const buf4 = Buffer.from([1, 2, 3]);

// 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
const buf5 = Buffer.from('tést');

// 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。
const buf6 = Buffer.from('tést', 'latin1');

//转换为json	...隐式调用toJSON();
var json = JSON.stringify(buf);
console.log(json);

//合并 concat 拷贝 copy 裁剪 slice 长度 length

//写入缓冲区
//buf.write(string[, offset[, length]][, encoding])
/**
string - 写入缓冲区的字符串。

offset - 缓冲区开始写入的索引值，默认为 0 。

length - 写入的字节数，默认为 buffer.length

encoding - 使用的编码。默认为 'utf8' 。
*/

//读取缓冲区
//buf.toString([encoding[, start[, end]]])
/**
encoding - 使用的编码。默认为 'utf8' 。

start - 指定开始读取的索引位置，默认为 0。

end - 结束位置，默认为缓冲区的末尾。


*/









