module.exports = ({
    name:"linkengel-kapat",
    code: `
    $onlyPerms[admin;$customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin \`Yönetici\` İznin Olmalı]
    $setServerVar[lengel;kapalı]
    $onlyIf[$getServerVar[lengel]!=kapalı;$customEmoji[pcross;$getVar[emojisw1]] | Bu Sistem Zaten Kapalı !]
  $customEmoji[ptick;$getVar[emojisw1]] | Link Engel Sistemi Kapatıldı. Açmak İçin \`$getServerVar[Prefix]linkengel-aç\` Yazınız 
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
    `
    }) 