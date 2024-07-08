module fantasy_puzzle::fantasy_puzzle_nft {

    use std::string;
    use sui::event;
    use sui::object;
    use sui::tx_context;
    use sui::url;
    use sui::url::Url;

    public struct fantasy_puzzle_nft has key, store {
        id: UID,
        name: string::String,
        description: string::String,
        url: Url
    }

    public struct fantasy_puzzle_nft_mint_event has copy, drop {
        object_id: ID,
        creator: address,
        name: string::String
    }

    public struct fantasy_puzzle_nft_burn_event has copy, drop {
        object_id: ID
    }

    public struct fantasy_puzzle_nft_transfer_event has copy, drop {
        object_id: ID,
        from: address,
        to: address
    }

    /*
    public struct fantasy_puzzle_nft_owner has key {

    }
    */

    public entry fun mint_nft(name: vector<u8>, description: vector<u8>, url: vector<u8>, ctx: &mut TxContext) {
        let sender = tx_context::sender(ctx);
        let nft = fantasy_puzzle_nft {
            id: object::new(ctx),
            name: string::utf8(name),
            description: string::utf8(description),
            url: url::new_unsafe_from_bytes(url)
        };

        event::emit(fantasy_puzzle_nft_mint_event {
            object_id: object::id(&nft),
            creator: sender,
            name: nft.name
        });
    }

    public entry fun transfer_nft(
        nft: fantasy_puzzle_nft,
        recipient: address,
        _: &mut TxContext
    ) {
        event::emit(fantasy_puzzle_nft_transfer_event {
            object_id: object::id(&nft),
            from: tx_context::sender(_),
            to: recipient
        });

        transfer:: public_transfer(nft, recipient);
    }

    public entry fun burn(
        nft: fantasy_puzzle_nft,
        _: &mut TxContext
    ) {
        let fantasy_puzzle_nft { id, name: _, description: _, url: _ } = nft;

        event::emit(fantasy_puzzle_nft_burn_event {
            object_id: object::uid_to_inner(&id)
        });

        object::delete(id);
    }
}
