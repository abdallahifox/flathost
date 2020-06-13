<template>
    <div>
        <div class="pricing">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 mb-5">
                        <div class="upper text-center">
                            <h1>Plans & Pricing</h1>
                            <p>Tailored plans and pricing suits your needs</p>
                        </div>
                    </div>                                                          
                </div>
                <div class="row">
                    <div class="col-lg-3 mb-5 pricing-plan">
                        <div class="pricing-box">
                            <div class="header-box">
                                <span>$15</span>
                                <h3>standard</h3>
                                <p>Monthly Plan</p>
                            </div>
                            <div class="box-title">
                                <ul>
                                    <li>1GB Storage Space</li>
                                    <li>1GB Storage Space</li>
                                    <li>1GB Storage Space</li>
                                    <li>1GB Storage Space</li>
                                    <li>1GB Storage Space</li>
                                    <li>1GB Storage Space</li>
                                </ul>
                            </div>
                            <div class="button">
                                <a href="#" class="btn btn-success"> Sign Up</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 mb-5 pricing-plan">
                        <div class="pricing-box">
                            <div class="header-box">
                                <span>$15</span>
                                <h3>standard</h3>
                                <p>Monthly Plan</p>
                            </div>
                            <div class="box-title">
                                <ul>
                                    <li>1GB Storage Space</li>
                                    <li>1GB Storage Space</li>
                                    <li>1GB Storage Space</li>
                                    <li>1GB Storage Space</li>
                                    <li>1GB Storage Space</li>
                                    <li>1GB Storage Space</li>
                                </ul>
                            </div>
                            <div class="button">
                                <a href="#" class="btn btn-success"> Sign Up</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 mb-5 pricing-plan">
                        <div class="pricing-box">
                            <div class="header-box red">
                                <span>$15</span>
                                <h3>standard</h3>
                                <p>Monthly Plan</p>
                            </div>
                            <div class="box-title">
                                <ul>
                                    <li>1GB Storage Space</li>
                                    <li>1GB Storage Space</li>
                                    <li>1GB Storage Space</li>
                                    <li>1GB Storage Space</li>
                                    <li>1GB Storage Space</li>
                                    <li>1GB Storage Space</li>
                                </ul>
                            </div>
                            <div class="button">
                                <a href="#" class="btn btn-danger"> Sign Up</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 mb-5 pricing-plan">
                        <div class="pricing-box">
                            <div class="header-box">
                                <span>$15</span>
                                <h3>standard</h3>
                                <p>Monthly Plan</p>
                            </div>
                            <div class="box-title">
                                <ul>
                                    <li>1GB Storage Space</li>
                                    <li>1GB Storage Space</li>
                                    <li>1GB Storage Space</li>
                                    <li>1GB Storage Space</li>
                                    <li>1GB Storage Space</li>
                                    <li>1GB Storage Space</li>
                                </ul>
                            </div>
                            <div class="button">
                                <a href="#" class="btn btn-success"> Sign Up</a>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
        <!-- Searching Component -->
        <CompSearch/>
        <CompPlans/>
    </div>
</template>

<script>
import CompPlans from './plans'
import CompSearch from './searching'
export default {
    components: {
        CompSearch,
        CompPlans
    }
}
</script>

