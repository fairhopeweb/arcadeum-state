var searchIndex = JSON.parse('{\
"arcadeum":{"doc":"","i":[[3,"Proof","arcadeum","Authenticated state",null,null],[3,"RootProof","","Authenticated initial state",null,null],[3,"Diff","","Authenticated state transition",null,null],[3,"ProofState","","Consensus state",null,null],[3,"ProofAction","","Attributable state transition",null,null],[12,"player","","The player performing the action, or [None] if performed…",0,null],[12,"action","","The action.",0,null],[4,"PlayerAction","","State transition",null,null],[13,"Play","","A domain-specific state transition.",1,null],[13,"Certify","","A subkey certification.",1,null],[12,"address","arcadeum::PlayerAction","The subkey address.",2,null],[12,"signature","","The signature of the subkey challenge.",2,null],[0,"store","arcadeum","Client store",null,null],[3,"Tester","arcadeum::store","Store tester",null,null],[3,"Store","","Client [State] store",null,null],[3,"Context","","[State::apply] utilities",null,null],[4,"Log","","Simulation event log",null,null],[13,"Complete","","A log for a complete transition.",3,null],[13,"Incomplete","","A log for an incomplete transition.",3,null],[11,"new","","Constructs a new store tester.",4,[[["proofaction",3],["vec",3]],[["result",4],["string",3]]]],[11,"state","","Gets the state of the tester.",4,[[]]],[11,"secret","","Gets a player\'s secret information.",4,[[["player",6]],[["deref",8],["box",3]]]],[11,"apply","","Applies an action by a given player to the tester.",4,[[["player",6]],[["string",3],["result",4]]]],[0,"bindings","","WebAssembly-specific utilities",null,null],[3,"JsRng","arcadeum::store::bindings","Random number generator using an external JavaScript…",null,null],[12,"0","","",5,null],[8,"State","arcadeum::store","Domain-specific store state trait",null,null],[16,"ID","","Identifier type",6,null],[16,"Nonce","","Nonce type",6,null],[16,"Action","","Action type",6,null],[16,"Secret","","Secret type",6,null],[10,"version","","Gets the ABI version of this implementation.",6,[[]]],[11,"challenge","","Gets the challenge that must be signed in order to certify…",6,[[["address",6]],["string",3]]],[10,"deserialize","","Constructs a state from its binary representation.",6,[[],[["result",4],["string",3]]]],[11,"is_serializable","","Checks if the state has a binary representation.",6,[[]]],[10,"serialize","","Generates a binary representation that can be used to…",6,[[],[["vec",3],["option",4]]]],[10,"verify","","Verifies if an action by a given player is valid for the…",6,[[["option",4],["player",6]],[["string",3],["result",4]]]],[10,"apply","","Applies an action by a given player to the state.",6,[[["option",4],["player",6],["context",3]],[["pin",3],["box",3]]]],[8,"Secret","","Domain-specific store state secret trait",null,null],[10,"deserialize","","Constructs a state secret from its binary representation.",7,[[],[["result",4],["string",3]]]],[10,"serialize","","Generates a binary representation that can be used to…",7,[[],["vec",3]]],[8,"Event","","[Context::log] event trait",null,null],[11,"new","","Constructs a new store for a given player.",8,[[["option",4],["player",6]],[["result",4],["string",3]]]],[11,"deserialize","","Constructs a store from its binary representation.",8,[[],[["result",4],["string",3]]]],[11,"serialize","","Generates a binary representation that can be used to…",8,[[["option",4],["player",6]],["vec",3]]],[11,"player","","Gets the player associated with the store.",8,[[],[["option",4],["player",6]]]],[11,"hash","","Gets the hash of the store\'s proof.",8,[[],["hash",6]]],[11,"state","","Gets the state of the store\'s proof.",8,[[],["proofstate",3]]],[11,"dispatch_timeout","","Dispatches an action that will continue a stalled…",8,[[],[["string",3],["result",4]]]],[11,"flush","","Dispatches any actions the client is required to send.",8,[[],[["string",3],["result",4]]]],[11,"apply","","Verifies and applies a cryptographically constructed diff…",8,[[["diff",3]],[["string",3],["result",4]]]],[11,"diff","","Generates a diff that can be applied to a store with the…",8,[[["vec",3],["proofaction",3]],[["result",4],["diff",3],["string",3]]]],[11,"mutate_secret","","Mutates a player\'s secret information.",9,[[["player",6]]]],[11,"reveal","","Requests a player\'s secret information.",9,[[["player",6]]]],[11,"reveal_unique","","Requests a player\'s secret information.",9,[[["player",6]]]],[11,"random","","Constructs a random number generator via commit-reveal.",9,[[]]],[11,"log","","Logs an event.",9,[[]]],[0,"crypto","arcadeum","Cryptographic utilities",null,null],[3,"SecretKey","arcadeum::crypto","Secret key (256-bit) on a secp256k1 curve.",null,null],[3,"MerkleTree","","Balanced Merkle tree",null,null],[3,"MerkleProof","","Merkle proof",null,null],[5,"sign","","Signs a message with a secp256k1 ECDSA secret key.",null,[[["secretkey",3]],["signature",6]]],[5,"recover","","Recovers the address of the key that signed a message.",null,[[],[["address",6],["string",3],["result",4]]]],[5,"_cached_recover","","",null,[[["_signature",3],["hash",6]],[["address",6],["string",3],["result",4]]]],[5,"address","","Computes the address of a secp256k1 ECDSA public key.",null,[[["publickey",3]],["address",6]]],[5,"eip55","","Computes the EIP 55 representation of an address.",null,[[["address",6]],["string",3]]],[6,"Address","","Public key address",null,null],[6,"Signature","","Message signature",null,null],[6,"Hash","","Message digest",null,null],[8,"Addressable","","Addressable trait",null,null],[10,"address","","Gets the address.",10,[[],["address",6]]],[11,"eip55","","Gets the EIP 55 representation of the address.",10,[[],["string",3]]],[8,"MerkleLeaf","","Merkle tree element trait",null,null],[10,"deserialize","","Constructs an element from its binary representation.",11,[[],[["result",4],["string",3]]]],[10,"serialize","","Generates a binary representation that can be used to…",11,[[],["vec",3]]],[11,"new","","Constructs an unsalted Merkle tree from a vector.",12,[[["vec",3]]]],[11,"with_salt","","Constructs a salted Merkle tree from a vector and a source…",12,[[["vec",3],["rngcore",8]],[["result",4],["string",3]]]],[11,"deserialize","","Constructs a Merkle tree from its binary representation.",12,[[],[["result",4],["string",3]]]],[11,"serialize","","Generates a binary representation that can be used to…",12,[[],["vec",3]]],[11,"elements","","Gets the elements in the Merkle tree.",12,[[],["vec",3]]],[11,"is_empty","","`true` if the Merkle tree is empty.",12,[[]]],[11,"len","","Gets the number of elements in the Merkle tree.",12,[[]]],[11,"root","","Gets the root hash of the Merkle tree.",12,[[],["hash",6]]],[11,"proof","","Generates a Merkle proof for the element at the given index.",12,[[],[["result",4],["merkleproof",3],["string",3]]]],[11,"deserialize","","Constructs a Merkle proof from its binary representation.",13,[[],[["result",4],["string",3]]]],[11,"serialize","","Generates a binary representation that can be used to…",13,[[],["vec",3]]],[11,"element","","Gets the element of the Merkle proof.",13,[[]]],[11,"index","","Gets the index of the element in the Merkle tree.",13,[[]]],[11,"length","","Gets the length of the Merkle tree.",13,[[]]],[11,"root","","Gets the root hash of the Merkle proof.",13,[[],["hash",6]]],[0,"utils","arcadeum","Utilities",null,null],[5,"hex","arcadeum::utils","Encodes a byte string to its hexadecimal representation.",null,[[],["string",3]]],[5,"unhex","","Decodes the hexadecimal representation of a byte string.",null,[[],[["string",3],["vec",3],["result",4]]]],[0,"version","arcadeum","ABI versioning utilities",null,null],[5,"tag","arcadeum::version","Generates a module exporting a canonical digest of the…",null,[[],["result",6]]],[5,"version","","Generates a canonical digest of the contents of the files…",null,[[],[["result",6],["vec",3]]]],[6,"Player","arcadeum","Player identifier",null,null],[8,"State","","Domain-specific state trait",null,null],[16,"ID","","Identifier type",14,null],[16,"Nonce","","Nonce type",14,null],[16,"Action","","Action type",14,null],[10,"version","","Gets the ABI version of this implementation.",14,[[]]],[11,"challenge","","Gets the challenge that must be signed in order to certify…",14,[[["address",6]],["string",3]]],[10,"deserialize","","Constructs a state from its binary representation.",14,[[],[["result",4],["string",3]]]],[11,"is_serializable","","Checks if the state has a binary representation.",14,[[]]],[10,"serialize","","Generates a binary representation that can be used to…",14,[[],[["vec",3],["option",4]]]],[10,"apply","","Applies an action by a given player to the state.",14,[[["option",4],["player",6]],[["string",3],["result",4]]]],[8,"ID","","Domain-specific identifier trait",null,null],[10,"deserialize","","Consumes an identifier from binary data.",15,[[],[["result",4],["string",3]]]],[10,"serialize","","Generates a binary representation that can be used to…",15,[[],["vec",3]]],[8,"Nonce","","Domain-specific nonce trait",null,null],[10,"deserialize","","Consumes a nonce from binary data.",16,[[],[["result",4],["string",3]]]],[10,"serialize","","Generates a binary representation that can be used to…",16,[[],["vec",3]]],[10,"next","","Gets the next nonce in sequence.",16,[[]]],[8,"Action","","Domain-specific state transition trait",null,null],[10,"deserialize","","Constructs an action from its binary representation.",17,[[],[["result",4],["string",3]]]],[10,"serialize","","Generates a binary representation that can be used to…",17,[[],["vec",3]]],[11,"new","","Constructs a bare proof from a root proof.",18,[[["rootproof",3]]]],[11,"deserialize","","Updates the proof\'s state from a binary representation.",18,[[],[["string",3],["result",4]]]],[11,"serialize","","Generates a binary representation that can be used to…",18,[[],["vec",3]]],[11,"hash","","Gets the digest of the proof.",18,[[],["hash",6]]],[11,"state","","Gets the state of the proof.",18,[[],["proofstate",3]]],[11,"apply","","Verifies and applies a cryptographically constructed diff…",18,[[["diff",3]],[["result",4],["error",4]]]],[11,"diff","","Generates a diff that can be applied to a proof with the…",18,[[["proofaction",3],["vec",3]],[["string",3],["result",4],["diff",3]]]],[11,"new","","Constructs a root proof from `state` and `actions`.",19,[[["proofaction",3],["vec",3],["proofstate",3]],[["result",4],["string",3]]]],[11,"version","","Reads the version from a root proof\'s binary representation.",19,[[],[["string",3],["vec",3],["result",4]]]],[11,"deserialize","","Constructs a root proof from its binary representation.",19,[[],[["result",4],["string",3]]]],[11,"serialize","","Generates a binary representation that can be used to…",19,[[],["vec",3]]],[11,"hash","","Gets the digest of the root proof.",19,[[],["hash",6]]],[11,"state","","Gets the state of the root proof.",19,[[],["proofstate",3]]],[11,"deserialize","","Constructs a diff from its binary representation.",20,[[],[["result",4],["string",3]]]],[11,"serialize","","Generates a binary representation that can be used to…",20,[[],["vec",3]]],[11,"proof","","Gets the hash of the proof the diff was constructed on.",20,[[],["hash",6]]],[11,"new","","Constructs a consensus state.",21,[[],[["result",4],["string",3]]]],[11,"id","","Gets the identifier of the state.",21,[[]]],[11,"player","","Gets the player associated with the given `address`, if…",21,[[["address",6]],[["option",4],["player",6]]]],[11,"players","","Gets the addresses of the players.",21,[[]]],[11,"state","","Gets the domain-specific state.",21,[[]]],[14,"bind","","Generates WebAssembly bindings for a [store::State].",null,null],[14,"console_log","","`console.log()`",null,null],[11,"from","","",18,[[]]],[11,"into","","",18,[[]]],[11,"to_owned","","",18,[[]]],[11,"clone_into","","",18,[[]]],[11,"borrow","","",18,[[]]],[11,"try_from","","",18,[[],["result",4]]],[11,"try_into","","",18,[[],["result",4]]],[11,"borrow_mut","","",18,[[]]],[11,"type_id","","",18,[[],["typeid",3]]],[11,"vzip","","",18,[[]]],[11,"clone_box","","",18,[[]]],[11,"from","","",19,[[]]],[11,"into","","",19,[[]]],[11,"to_owned","","",19,[[]]],[11,"clone_into","","",19,[[]]],[11,"borrow","","",19,[[]]],[11,"try_from","","",19,[[],["result",4]]],[11,"try_into","","",19,[[],["result",4]]],[11,"borrow_mut","","",19,[[]]],[11,"type_id","","",19,[[],["typeid",3]]],[11,"vzip","","",19,[[]]],[11,"clone_box","","",19,[[]]],[11,"from","","",20,[[]]],[11,"into","","",20,[[]]],[11,"to_owned","","",20,[[]]],[11,"clone_into","","",20,[[]]],[11,"borrow","","",20,[[]]],[11,"try_from","","",20,[[],["result",4]]],[11,"try_into","","",20,[[],["result",4]]],[11,"borrow_mut","","",20,[[]]],[11,"type_id","","",20,[[],["typeid",3]]],[11,"vzip","","",20,[[]]],[11,"clone_box","","",20,[[]]],[11,"from","","",21,[[]]],[11,"into","","",21,[[]]],[11,"to_owned","","",21,[[]]],[11,"clone_into","","",21,[[]]],[11,"borrow","","",21,[[]]],[11,"try_from","","",21,[[],["result",4]]],[11,"try_into","","",21,[[],["result",4]]],[11,"borrow_mut","","",21,[[]]],[11,"type_id","","",21,[[],["typeid",3]]],[11,"vzip","","",21,[[]]],[11,"clone_box","","",21,[[]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"borrow_mut","","",0,[[]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"vzip","","",0,[[]]],[11,"clone_box","","",0,[[]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"borrow_mut","","",1,[[]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"vzip","","",1,[[]]],[11,"clone_box","","",1,[[]]],[11,"from","arcadeum::store","",4,[[]]],[11,"into","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"borrow_mut","","",4,[[]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"vzip","","",4,[[]]],[11,"from","","",8,[[]]],[11,"into","","",8,[[]]],[11,"borrow","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"borrow_mut","","",8,[[]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"vzip","","",8,[[]]],[11,"from","","",9,[[]]],[11,"into","","",9,[[]]],[11,"borrow","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"borrow_mut","","",9,[[]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"vzip","","",9,[[]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"borrow_mut","","",3,[[]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"vzip","","",3,[[]]],[11,"erased_serialize","","",3,[[["serializer",8]],[["result",4],["ok",3],["error",3]]]],[11,"from","arcadeum::store::bindings","",5,[[]]],[11,"into","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"borrow_mut","","",5,[[]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"vzip","","",5,[[]]],[11,"from","arcadeum::crypto","",22,[[]]],[11,"into","","",22,[[]]],[11,"to_owned","","",22,[[]]],[11,"clone_into","","",22,[[]]],[11,"borrow","","",22,[[]]],[11,"try_from","","",22,[[],["result",4]]],[11,"try_into","","",22,[[],["result",4]]],[11,"borrow_mut","","",22,[[]]],[11,"type_id","","",22,[[],["typeid",3]]],[11,"vzip","","",22,[[]]],[11,"clone_box","","",22,[[]]],[11,"deserialize","","",12,[[],[["result",4],["string",3]]]],[11,"serialize","","",12,[[],["vec",3]]],[11,"deserialize","","",12,[[],[["result",4],["string",3]]]],[11,"serialize","","",12,[[],["vec",3]]],[11,"deserialize","","",12,[[],[["result",4],["string",3]]]],[11,"serialize","","",12,[[],["vec",3]]],[11,"deserialize","","",12,[[],[["result",4],["string",3]]]],[11,"serialize","","",12,[[],["vec",3]]],[11,"from","","",12,[[]]],[11,"into","","",12,[[]]],[11,"to_owned","","",12,[[]]],[11,"clone_into","","",12,[[]]],[11,"borrow","","",12,[[]]],[11,"try_from","","",12,[[],["result",4]]],[11,"try_into","","",12,[[],["result",4]]],[11,"borrow_mut","","",12,[[]]],[11,"type_id","","",12,[[],["typeid",3]]],[11,"vzip","","",12,[[]]],[11,"erased_serialize","","",12,[[["serializer",8]],[["result",4],["ok",3],["error",3]]]],[11,"clone_box","","",12,[[]]],[11,"deserialize","","",13,[[],[["result",4],["string",3]]]],[11,"serialize","","",13,[[],["vec",3]]],[11,"deserialize","","",13,[[],[["result",4],["string",3]]]],[11,"serialize","","",13,[[],["vec",3]]],[11,"deserialize","","",13,[[],[["result",4],["string",3]]]],[11,"serialize","","",13,[[],["vec",3]]],[11,"deserialize","","",13,[[],[["result",4],["string",3]]]],[11,"serialize","","",13,[[],["vec",3]]],[11,"from","","",13,[[]]],[11,"into","","",13,[[]]],[11,"to_owned","","",13,[[]]],[11,"clone_into","","",13,[[]]],[11,"borrow","","",13,[[]]],[11,"try_from","","",13,[[],["result",4]]],[11,"try_into","","",13,[[],["result",4]]],[11,"borrow_mut","","",13,[[]]],[11,"type_id","","",13,[[],["typeid",3]]],[11,"vzip","","",13,[[]]],[11,"erased_serialize","","",13,[[["serializer",8]],[["result",4],["ok",3],["error",3]]]],[11,"clone_box","","",13,[[]]],[11,"drop","","",22,[[]]],[11,"try_from","","",22,[[["scalar",3]],[["secretkey",3],["result",4],["error",4]]]],[11,"eq","","",22,[[["secretkey",3]]]],[11,"ne","","",22,[[["secretkey",3]]]],[11,"default","","",22,[[],["secretkey",3]]],[11,"into","","",22,[[],["scalar",3]]],[11,"clone","","",22,[[],["secretkey",3]]],[11,"fmt","","",22,[[["formatter",3]],[["result",4],["error",3]]]],[11,"fmt","","",22,[[["formatter",3]],[["result",4],["error",3]]]],[11,"address","","",22,[[],["address",6]]],[11,"address","arcadeum","",23,[[],["address",6]]],[11,"eip55","","",23,[[],["string",3]]],[11,"clone","arcadeum::crypto","",12,[[],["merkletree",3]]],[11,"clone","","",13,[[],["merkleproof",3]]],[11,"clone","arcadeum","",18,[[]]],[11,"clone","","",19,[[]]],[11,"clone","","",20,[[],["diff",3]]],[11,"clone","","",21,[[],["proofstate",3]]],[11,"clone","","",0,[[],["proofaction",3]]],[11,"clone","","",1,[[],["playeraction",4]]],[11,"eq","arcadeum::crypto","",12,[[["merkletree",3]]]],[11,"ne","","",12,[[["merkletree",3]]]],[11,"eq","","",13,[[["merkleproof",3]]]],[11,"ne","","",13,[[["merkleproof",3]]]],[11,"fmt","","",12,[[["formatter",3]],["result",6]]],[11,"fmt","","",13,[[["formatter",3]],["result",6]]],[11,"fmt","arcadeum","",20,[[["formatter",3]],[["error",3],["result",4]]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],[["error",3],["result",4]]]],[11,"next_u32","arcadeum::store::bindings","",5,[[]]],[11,"next_u64","","",5,[[]]],[11,"fill_bytes","","",5,[[]]],[11,"try_fill_bytes","","",5,[[],[["error",3],["result",4]]]],[11,"serialize","arcadeum::store","",3,[[],["result",4]]],[11,"serialize","","",24,[[["serializer",8]],["result",4]]],[11,"serialize","arcadeum::crypto","",12,[[],["result",4]]],[11,"serialize","","",13,[[],["result",4]]],[11,"deserialize","","",12,[[],["result",4]]],[11,"deserialize","","",13,[[],["result",4]]],[11,"parse","","",22,[[],[["secretkey",3],["result",4],["error",4]]]],[11,"parse_slice","","",22,[[],[["secretkey",3],["result",4],["error",4]]]],[11,"random","","",22,[[],["secretkey",3]]],[11,"serialize","","",22,[[]]],[11,"tweak_add_assign","","",22,[[["secretkey",3]],[["result",4],["error",4]]]],[11,"tweak_mul_assign","","",22,[[["secretkey",3]],[["result",4],["error",4]]]],[11,"inv","","",22,[[],["secretkey",3]]]],"p":[[3,"ProofAction"],[4,"PlayerAction"],[13,"Certify"],[4,"Log"],[3,"Tester"],[3,"JsRng"],[8,"State"],[8,"Secret"],[3,"Store"],[3,"Context"],[8,"Addressable"],[8,"MerkleLeaf"],[3,"MerkleTree"],[3,"MerkleProof"],[8,"State"],[8,"ID"],[8,"Nonce"],[8,"Action"],[3,"Proof"],[3,"RootProof"],[3,"Diff"],[3,"ProofState"],[3,"SecretKey"],[6,"Address"],[8,"Event"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);