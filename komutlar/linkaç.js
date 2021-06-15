module.exports = ({
    name: "linkengel-aç",
    code: `
    $onlyPerms[admin;$customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin \`Yönetici\` İznin Olmalı]
    $setServerVar[lengel;açık]
    $onlyIf[$getServerVar[lengel]!=açık;$customEmoji[pcross;$getVar[emojisw1]] | Bu Sistem Zaten Açık !]
  $customEmoji[ptick;$getVar[emojisw1]] | Link Engel Sistemi Başarıyla Açıldı Kapatmak İçin \`$getServerVar[Prefix]linkengel-kapat\` Yaz
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]`
    }) 