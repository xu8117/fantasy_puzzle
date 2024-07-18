set PACKAGE_ID=0x2540564cc1ce271bb2f5cca67ac775fc3def2701ba608ed0eb92dfed4ab15a0c
set MODULE=lottery
set FUNC_NAME=buyTicket
set GAS_BUDGET=100000000
set LOTTERY=0x9e0ca9082406d9d63545eb8485a78b7404a63e515c5557c66090ea11448a70c5
set PLAYER_RECORD1=0x6c38b49bc8d8b4f532855b010809501e8503878be895758be60a527af84bd6d1
set COUNT=1
set AMOUNT=0xa0e97c3ceef97b22afd95703875c82abb39824a12088c7df876a6be3b1fd75fd

sui client call --gas-budget %GAS_BUDGET%  --package %PACKAGE_ID% --module %MODULE% --function %FUNC_NAME% --args %LOTTERY% %PLAYER_RECORD1% %COUNT% %AMOUNT% 0x6





# Bob购买8张奖票

export AMOUNT=0x54060b76fa166806dfc99c5fcb569c9de0b6e40ded523e7ac6fe740c57d3ebbb

export COUNT=8

sui client call --function buyTicket --package $PACKAGE_ID --module lottery --args $LOTTERY $PLAYER_RECORE2 $COUNT $AMOUNT 0x6 --gas-budget $GAS_BUDGET

# Alice再购买3张奖票
export AMOUNT=0xaa336e6e334debd8282b3f460f47c18da7bd69d78ded5c88acb33e749b583d28

export COUNT=3

sui client call --function buyTicket --package $PACKAGE_ID --module lottery --args $LOTTERY $PLAYER_RECORE1 $COUNT $AMOUNT 0x6 --gas-budget $GAS_BUDGET
