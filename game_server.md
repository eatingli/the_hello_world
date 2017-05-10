# Game Server

## Data

### Account

    玩家帳戶資料

### Game State

    遊戲資料

## Game Loop

### Monster Born

    怪物出身、依等級決定怪物分布、依等級決定數量和出生週期、

### Monster Regain

    怪物生命恢復、判定怪物的狀態

### Player Regain

    玩家生命、體力恢復

### Ground Item Generate

    地板物品產生

### Trader Emerge

    商人現身

### Trader Vanish

    商人消失

## Player API

### Register Account

    用角色ID和自訂字串得到一組Key，可以用這組Key來操作所有Player API。

### Role Move

    指定方向來移動角色。

### Role Attack

    指定方向來攻擊目標。

### Role Pick Item

    指定方向來拾取地板物品。

### Role Talk To NPC

    指定方向和聊天選項序列來和NPC對話。

### Role Rest

    角色休息。

### Role Hello

    指定方向來打招呼。