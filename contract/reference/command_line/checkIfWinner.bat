set PACKAGE_ID=0x2540564cc1ce271bb2f5cca67ac775fc3def2701ba608ed0eb92dfed4ab15a0c
set MODULE=lottery
set FUNC_NAME=checkIfWinner
set GAS_BUDGET=100000000
set LOTTERY=0x9e0ca9082406d9d63545eb8485a78b7404a63e515c5557c66090ea11448a70c5
set PLAYER_RECORD1=0x6c38b49bc8d8b4f532855b010809501e8503878be895758be60a527af84bd6d1

sui client call --gas-budget %GAS_BUDGET%  --package %PACKAGE_ID% --module %MODULE% --function %FUNC_NAME% --args %LOTTERY% %PLAYER_RECORD1%





# 玩家Alice兑奖

sui client call --function checkIfWinner --package $PACKAGE_ID --module lottery --args $LOTTERY $PLAYER_RECORE1 --gas-budget $GAS_BUDGET


# 玩家Bob兑奖

sui client object $PLAYER_RECORE2
