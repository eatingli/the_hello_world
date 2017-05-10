# The Hello World

## Rule

### Position

    一個位置只能有一個物件，包含玩家、怪物、商人、道具......。

### Battle

    戰鬥為雙方互打一回合，打敗怪物給予經驗、金幣、成就，死亡時降等、外圍復活。

## Monster

### Kind

    怪物依類型分成六種，每種又分不同等級，其最高等的為該種類的BOSS怪，打倒後有對應成就。

    最終BOSS為獨立分類，是遊戲內的最強怪物。

### Regain

    怪物在非戰鬥狀態下週期性地恢復生命，戰鬥狀態中則恢復較慢，一定沒被玩家攻擊則脫離戰鬥狀態。

### EXP

    打敗怪物的經驗值是根據玩家和怪物的等級差距決定的，怪物越高等經驗獎勵越多，反之則較少。

### Money

    打敗怪物獲得的金錢是由怪物等級決定的，且有一定範圍。

## Player Attribute

### Level

    等級

### EXP

    經驗值

### Life

    生命

### Energy

    體力

### Weapon

    武器

### Equipment

    裝備

### Money

    金錢

### Achievement

    成就

### HelloBuff

    HelloBuff

### Super HelloBuff

    Super HelloBuff

## Player Action

### Move

    一次可以移動一格(上下左右)、消耗體力。

### Attack

    向怪物發起戰鬥、八個方位皆可、消耗體力。

### Pick Item

    拾取地板物品、八個方位皆可。

### Talk To NPC

    與NPC對話、八個方位皆可、會因聊天選項不同而有不同結果、消耗體力。

### Rest

    恢復角色的生命和體力、需要等待時間。

### Hello

    向目標打招呼、八個方位皆可、可讓其他玩家獲得HelloBuff、消耗體力。

