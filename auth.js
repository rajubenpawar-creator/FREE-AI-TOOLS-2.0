<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>
<script>
const supabaseUrl="YOUR_SUPABASE_URL";
const supabaseKey="YOUR_PUBLIC_KEY";
const supabaseClient=supabase.createClient(supabaseUrl,supabaseKey);

async function register(email,password){
await supabaseClient.auth.signUp({email,password});
alert("Check email for confirmation");
}

async function login(email,password){
const {error}=await supabaseClient.auth.signInWithPassword({email,password});
if(error){alert("Login failed");}
else{window.location.href="dashboard.html";}
}
</script>
