set PACKAGE_ID=0x2540564cc1ce271bb2f5cca67ac775fc3def2701ba608ed0eb92dfed4ab15a0c
set MODULE=lottery
set FUNC_NAME=createPlayerRecord
set GAS_BUDGET=100000000

set LOTTERY=0x9e0ca9082406d9d63545eb8485a78b7404a63e515c5557c66090ea11448a70c5

sui client call --gas-budget %GAS_BUDGET%  --package %PACKAGE_ID% --module %MODULE% --function %FUNC_NAME% --args %LOTTERY%
set PLAYER_RECORE1=0x6c38b49bc8d8b4f532855b010809501e8503878be895758be60a527af84bd6d1

//------------------------------------------------------------------------------------------------------------

# 切换到Bob 创建玩家Bob记录对象
sui client call --function createPlayerRecord --package $PACKAGE_ID --module lottery --args $LOTTERY --gas-budget $GAS_BUDGET
export PLAYER_RECORE2=0x355deffd7f8f7f2e00b346115bdc8a44e670f8a2d017c9af24d5b1a34e9e12ff
