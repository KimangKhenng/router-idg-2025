<template>
    <!-- Card Blog -->
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <!-- Title -->
        <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 class="text-2xl font-bold md:text-4xl md:leading-tight">Insights</h2>
            <p class="mt-1 text-gray-600">Stay in the know with insights from industry experts.</p>
        </div>
        <!-- End Title -->

        <!-- Grid -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Card -->
            <a class="group flex flex-col focus:outline-hidden" href="#">
                <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                    <img class="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                        src="@/assets/images/shiba.jpg" alt="Blog Image">
                    <span
                        class="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3">
                        Sponsored
                    </span>
                </div>

                <div class="mt-7">
                    <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
                        Studio by Preline
                    </h3>
                    <p class="mt-3 text-gray-800">
                        Produce professional, reliable streams easily leveraging Preline's innovative broadcast studio
                    </p>
                    <p
                        class="mt-5 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium">
                        Read more
                        <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </p>
                </div>
            </a>
            <!-- End Card -->

            <!-- Card -->
            <a class="group flex flex-col focus:outline-hidden" href="#">
                <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                    <img class="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                        src="@/assets/images/shiba.jpg" alt="Blog Image">
                </div>

                <div class="mt-7">
                    <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
                        Onsite
                    </h3>
                    <p class="mt-3 text-gray-800">
                        Optimize your in-person experience with best-in-class capabilities like badge printing and lead
                        retrieval
                    </p>
                    <p
                        class="mt-5 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium">
                        Read more
                        <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </p>
                </div>
            </a>
            <!-- End Card -->

            <!-- Card -->
            <a class="group relative flex flex-col w-full min-h-60 bg-[url('https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80')] bg-center bg-cover rounded-xl hover:shadow-lg focus:outline-hidden focus:shadow-lg transition"
                href="#">
                <div class="flex-auto p-4 md:p-6">
                    <h3 class="text-xl text-white/90 group-hover:text-white"><span class="font-bold">Preline</span>
                        Press publishes books about economic and technological advancement.</h3>
                </div>
                <div class="pt-0 p-4 md:p-6">
                    <div
                        class="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/70 group-focus:text-white/70">
                        Visit the site
                        <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </div>
                </div>
            </a>
            <!-- End Card -->
        </div>
        <!-- End Grid -->
    </div>
    <!-- End Card Blog -->
</template>