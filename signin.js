import React from "react";

const Signin = () =>
{
    return(
        <div style={{padding: '550px', paddingTop: '285px'}}>
        <div style={{}}> 
        <form>
            
  
            <div class="form-outline mb-4">
                <input type="email" id="form2Example1" placeholder="Username" class="form-control" />
                
            </div>

  
            <div class="form-outline mb-4">
                <input type="password" id="form2Example2" placeholder="Password" class="form-control" />
                
            </div>

  
            <div class="row mb-4">
                <div class="col d-flex justify-content-center">
                
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="form2Example34" />
                    <label class="form-check-label" for="form2Example34"> Remember me </label>
                </div>
                </div>

                <div class="col">
        
                    <a href="#!">Forgot password?</a>
                </div>
            </div>

            <button type="submit" class="btn btn-primary btn-block mb-4" style={{width: '282px', boxShadow: '6px 6px 8px rgba(200,0,0,0.3)', fontSize: '11px', fontWeight: 'bold'}}>SIGN IN</button> 
            
  
   <div class="text-center">
    <p>Not a member? <a href="#!">Register</a></p>
    {/* <p>or sign up with:</p>
    <button type="button" class="btn btn-primary btn-floating mx-1">
      <i class="fab fa-facebook-f"></i>
    </button>

    <button type="button" class="btn btn-primary btn-floating mx-1">
      <i class="fab fa-google"></i>
    </button>

    <button type="button" class="btn btn-primary btn-floating mx-1">
      <i class="fab fa-twitter"></i>
    </button>

    <button type="button" class="btn btn-primary btn-floating mx-1">
      <i class="fab fa-github"></i>
    </button> */}
  </div>
</form>
</div>
</div>
    )
}

export default Signin