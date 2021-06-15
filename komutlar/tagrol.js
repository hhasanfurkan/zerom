module.exports = ({
    name:"$alwaysExecute",
    code:`
    $customEmoji[zttakla;$getVar[emojisw2]] | **$serverName[$guildID]** adlı sunucunun tagını aldığın için teşekkürler \`$roleName[$getServerVar[tagrol]]\` rolün başarıyla verildi
    $dm[$authorID]
    $setUserVar[tagmesaj;aldı]
    $giveRole[$authorID;$getServerVar[tagrol]]
    $onlyIf[$getUserVar[tagmesaj]==almadı;]

$onlyIf[$checkContains[$toLowerCase[$username;$getServerVar[tag]]]==true;]
$suppressErrors `
})
