# fs.stat
fs.stat('',function(err,stats){}); 
- stat.isFile()   是否是文件
- stat.isDirectory  是否是文件夹


# fs.mkdir
fs.mkdir(path,mode,callback);
- path  创建的 目录路径
- mode 目录权限
- callback 回调
fs.mkdir('',function(err){}) 创建目录是否成功  可以判断目录是否存在

# fs.writeFile
fs.writeFile('path','内容','编码格式',function(err){}) 如果路径存在覆盖内容 不存在创建并写入

# fs.appendFile  追加文件内容

# fs.readFile  读取文件
读出来是十六进制 用data.toString()转换
# fs.readdir 读取目录
文件夹 文件 名都读取

# fs.rename 重命名
//改名
fs.rename('oldname','newname',function(){});
//剪切文件
fs.rename('oldpath','newpath',function);


# fs.rmdir 删除目录

# fs.unlink 删除文件
---------------------- 文件流---------------
#  fs.createReadStream   
//文件流读取文件 /*ps: 文件大用文件流  小用readFile
var readStream = fs.createReadStream('inpt.txt');
var  str = ''; //保存数据
readStream.on(i'data',function(chunk){
    str+=chunk
});
//读取完成
readStream.on('end',function(chunk){

})
//读取失败
readStream.on('error',function(chunk){
    
})


# fs.writeStreamWrite
writeStreamWrite.end()//标记写入完成
触发
writeStreamWrite.on('finish',function(){})
失败
writeStreamWrite.on('error',function(){});


---------管道流---------------------
//创建一个可读流
var readerStream = fs.createReadStream('input.txt');
//创建一个可写流
var writeStream = fs.createWriteStream('output.txt');
readerStream.pipe(writerStream);



