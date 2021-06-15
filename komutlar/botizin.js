module.exports = {
name:"botizinver",
code:`
$customEmoji[ptick;$getVar[emojisw2]] | \`$username[$message[1]]\` Adlı Bota İzin Verildi Bot Sunucuya Eklenirse Banlanmıycak

$setServerVar[izin;$message[1]]

$onlyIf[$isNumber[$message[1]]!=false;$customEmoji[pcross;$getVar[emojisw1]] | Bu Bir ID Değil]
$onlyIf[$isBot[$message[1]]!=false;$customEmoji[pcross;$getVar[emojisw1]] | Bu Bir Bot ID'si Değil]
$onlyIf[$message!=;$customEmoji[pcross;$getVar[emojisw1]] | **Kullanım:** $getServerVar[Prefix]botizinver 813872156349956177]
$onlyIf[$ownerID==$authorID;$customEmoji[pcross;$getVar[emojisw1]] | Sadece \`$username[$ownerID]\` Adlı Sunucu Sahibi Bot İzni Verebilir]
`
}
