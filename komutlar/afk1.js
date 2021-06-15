

module.exports = ({
name:"$alwaysExecute",
code:`$description[$customEmoji[pcross;$getVar[emojisw1]] | **Etiketlediğiniz kişi \`$getGlobalUserVar[afks;$mentioned[1]]\` sebebinden AFK.**]
$color[FFCCFF]
$thumbnail[$authorAvatar]
$onlyIf[$getGlobalUserVar[afk;$mentioned[1]]==evet;]
$suppressErrors`
})


