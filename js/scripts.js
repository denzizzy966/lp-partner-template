/*!
* Start Bootstrap - Bare v5.0.9 (https://startbootstrap.com/template/bare)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

var bsns1 = "独自システムを導入し、案件管理・開発運用システムを取り入れ、案件ブリーフィングから案件管理の進捗、コミュニケーション、修正開発まですべてのステップを一元化しております。クライアント様とのコミュニケーションなどへも導入可能です。（こちらは現在、導入試験実施しております）",
bsns2 = "プロセスを細分化し、効率の高い手段に置き換えることで、定例ミーティングや案件ミーティングなど代替可能なコミュニケーションを排除し、チャットや資料などの情報共有プロセスを強化し、新規メンバーが参加した場合も即座にアクセスできる環境を構築しています。",
bsns3 = "定期的にクライアント様からのフィードバックの実施を行います。通常、初期案件後とその後は毎月終わりにて、電話にて行っており、メールなどには書きにくいことなどがある場合でも深いフィードバックの実施を行っております。フィードバックをもとに継続的な品質向上を目指しています。",
bsns4 = "クライアント社内では周知のやり方や規定、ノウハウなどを継続的に深堀り・言葉に起こし、弊社チームがアクセスできるようにすることで、デザイン修正などの出戻りなどがないプロセスを目指します。",
bsns5 = "定期的なに弊社グループ内での情報セキュリティー認識の向上、またアクセスコントロールの実施を行うことで、確実性の高い情報セキュリティマネジメントシステムの運用を行なっています。また弊社グループ内にて、共同開発を行うため、３次請け会社への委託はございません。（個人事業主は含みます）"

document.getElementById("bsns1").addEventListener("click", myFunction)
document.getElementById("bsns2").addEventListener("click", myFunction)
document.getElementById("bsns3").addEventListener("click", myFunction)
document.getElementById("bsns4").addEventListener("click", myFunction)
document.getElementById("bsns5").addEventListener("click", myFunction)

function myFunction(){
    let idx = this.attributes.id

    if(idx.value == "bsns1"){
        document.getElementById("business-description").innerHTML = bsns1
    }
    if(idx.value == "bsns2"){
        document.getElementById("business-description").innerHTML = bsns2
    }
    if(idx.value == "bsns3"){
        document.getElementById("business-description").innerHTML = bsns3
    }
    if(idx.value == "bsns4"){
        document.getElementById("business-description").innerHTML = bsns4
    }
    if(idx.value == "bsns5"){
        document.getElementById("business-description").innerHTML = bsns5
    }
}
