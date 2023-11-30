# MAM for Windowsを試してみた

General Availabilityということで試してみました。

あくまで私が試した際の感想の話ですので、ご参考程度にお願いします。

大枠で参考にしたドキュメントは下記です。探しにくい場所にあります。

[Windows MAM のデータ保護](https://learn.microsoft.com/ja-jp/mem/intune/apps/protect-mam-windows)

# ポイントその１：条件付きアクセス

条件付きアクセスの設定もセットで説明されています。使うつもりはなくても、試すにあたって設定しておいたほうがいいかも。

参考にしたドキュメントは下記です。デバイスポリシー準拠要求と組み合わせるのはなるほどねと思いました。

[Windows デバイス上でアプリ保護ポリシーを要求する](https://learn.microsoft.com/ja-jp/entra/identity/conditional-access/how-to-app-protection-policy-windows)

# ポイントその２：Mobile Threat Defense

大枠のドキュメントに以下のような記載があります。

>Windows セキュリティ センターのMicrosoft Intuneにテナント ベースのコネクタを設定する

どうやらMobile Threat Defenseのセットアップが必要なようです。MTDについてのドキュメントは下記です。

[Intune でのモバイル脅威防御の統合](https://learn.microsoft.com/ja-jp/mem/intune/protect/mobile-threat-defense)

ただ今回作った"Windows Security Center"コネクターは上記に載っていませんでした。

# ポイントその３：登録していると機能しない

これが私にとって最大のポイント。おそらくこれのせいで1週間くらいハマりました。

Intuneに登録したデバイスだとこのアプリ保護ポリシーは機能しないみたいです。個人所有であったデバイスをIntuneから削除したら機能するようになりました。

[Windows のポリシー設定をアプリ保護する](https://learn.microsoft.com/ja-jp/mem/intune/apps/app-protection-policy-settings-windows)

>デバイスが既に管理されている場合、Intune MAM 登録はブロックされ、APP 設定は適用されません。
