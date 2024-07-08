module fantasy_puzzle::fantasy_puzzle {

    use std::string;

    public struct lottery {
        id: UID,
        issue: string::String,
        period_number: u32,
        period_end_date: u64, // millisecond-level timestamp
    }

}
