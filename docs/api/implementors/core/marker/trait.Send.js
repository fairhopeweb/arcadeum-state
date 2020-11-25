(function() {var implementors = {};
implementors["arcadeum"] = [{"text":"impl&lt;T&gt; Send for MerkleTree&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for MerkleProof&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; !Send for Tester&lt;S&gt;","synthetic":true,"types":[]},{"text":"impl !Send for JsRng","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; !Send for Store&lt;S&gt;","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Send for Log&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;S as State&gt;::Event: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; !Send for Context&lt;S&gt;","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Send for Proof&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;S as State&gt;::Action: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;S as State&gt;::ID: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;S as State&gt;::Nonce: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Send for RootProof&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;S as State&gt;::Action: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;S as State&gt;::ID: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;S as State&gt;::Nonce: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Send for Diff&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;S as State&gt;::Action: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Send for ProofState&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;S as State&gt;::ID: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;S as State&gt;::Nonce: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Send for ProofAction&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;S as State&gt;::Action: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Send for PlayerAction&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;S as State&gt;::Action: Send,&nbsp;</span>","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()