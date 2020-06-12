/**
 * @license
 * Copyright 2018 Advanced Visual Systems Inc.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * 
 * This product includes software developed at
 * Advanced Visual Systems Inc. (http://www.avs.com)
 */

export var LOGO = " data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAATOIAAEziASeKVuoAAAkuSURBVGhD7Vh5VFNXHs5CSICw7woiCAIiakBR6wIuPU5rFdxArUttO3M449JadUoV7ViXKm1PnY6txdZBxNqKy7TQau0onmrdxgJB3MqiIGuVsElCIJDM93vvQQ1CCAH/mHP4zrnnd+/73rvvy8293/3dx/t/BZ+LzwTDPsqQIESiGPOeK7fXTS3m6t3imQmHaOr7EMoS5oJh/IIyHcKb2Gb3eJbC30HYKTUXVgxztc5gr/6B3x4pJ9apNV6oFqGMheiHDGEknolwiJ6DcFwkFDRufd5/Q+QwtxKWYbHrfP6Yw/LSeJ2Op0RzAkTnsozxEHCxzwDRoxBS+HyebonMI6Gj6OO55V7f5JSth2gdmotNEU3oU+EQ7YaQhmIV4eN0YP3kIVkMweFGRb1tws8FmzVanSWacRD9Pcv0HH0mHKLJQf6N4hngLD29NzI4nSE4YD6L1qTlvqNsbnVFMwnlQ4YwEX0iHKJprRxAGecqFeckx8gSGYIDzYllR7P/+kjZHITqRZRYjDZRJqOvRnwjymKpuVn5p1EjdiO2spdZxJ7MmVugUE7nmicgupmrm4xeC8doz0N4z1woaIif5rct0EX6mGVY7DyfH3apuHq5mYDfKBTwSXACnolgWdPRK+EQEIKQLICDLA3xSJgV6FbKMixSb5QPPgoHofqiUQPBu/4DVRHKcTzrR9dNhcnC8WJ3hO9QyEG+eGvSkGyG4CAvr7P9AA7SotVZTBrsmBQX4ffrjhmBF0Z72H0D2hElDX3YMzebAJOE44UWCN+ieAS4SE/9MzL4B4bgUNOoEb2RfnOjStPq4udk9Z99c0bQvQz+tWDU1172lrRAA1BS0Rf9Az1Gj4XjRW0OEkYOcig6ZD9DcCAHeSU1e2WVsnkYtRs1rTaaVl37Di3k83UHF4za42ApykOTFuwnDNFDmDLi8SiLpGKzMozkLitzoZ6D/OVEzjw4yDRcr7SVmBWX1qnHrjiWvZSjGbhIxc0fzRy+3UIkrEIzFoOxhmWMh5CLRgEvmI/wGXIQ5dbp/vHPeTkoWIbF9oy8sT/mPVwlEvIbN00dGv+Cv0tGRmFVOMTLyuvV5dN8ndvT1oG2ErVULMy9UlwzRavjveg8Y/n1Rz8lF3B0tzBaOESHIqQJ+HzhitGeO5aHeuazDAu4h3fiteItmCpmS2SeO18P87rr42ClxOLMyyyri8irUoZhhLNHDbCt5h7hBbvZ1CiUzSW3Hj6ejOYsiE+H+EcsaxhGCYfoAQjnUByn+jolvvd8AC2udmSV1dlt/PHOjqZWrd1kb8cD7/8p8DxH8cI87R/mVzXUYvqMzy6vGz3S3eaCh61FI0fzJvs4lsrL65tL6hrHofkCxB+BeBXLdo1u5zhEtztIoIv1D5/MDj7FEByqVRrRm5yDDHWSnsG8J4vUw8ezhp8Z5mL9PRaq4/pTtzZh4ZpzFIPEuSNP+DpanUXVG+Uk3ilmCAMwKBwdkBtQQjTGzVosPxQj+4IhOCA1hYNkrVaomrFhinPBf85RTwH5y5dwITl+6NBXjmWvpmfbgBSYh2c/dbYyv4XmRJT9eDfDdYXuRnwLSoy12KwUI7nbUtTBQU7K5xdWq6bAQSqQDb6P+1o46inQs5+hD8pn7lerIv6MZzmKga1E1IL9YCe5EZrLUOIYogt0Ocfxi6MR9lIOglNM/PhB+g6y7VzeONZBBKrN04bGY253u6icrMybna3EOReLFBEPahtDaxtb7k3ydizjaB7+kSbcI79YVB2h1elmYL7fxHy/w9F66HTEIdoW4UsUPgSlzAxwLWcIDrA2ycmbFW/g7+ZP8HL4KirIXe+UYwhRQW4l9AyeFRzLLV9b+VhNeXw75qCvcG8HOmSTtiRosWGIDuhUONLOOgTaaHjI7GKuFFdTbtGOATYSdbiPI3XOu/qgZv7lDrwh0L1XS2opo+RN8nZIcbOWqBmCQ2ZZrf3l4pq2afQutNRzdT0YmuO0Fe8jJ9hw6vZmGmX2Mos9s4afDnK1Tle3tDr87dTt+MrHTd06QQX6oL7U6BMn//SODkVuszb91iY4lDOalErsYYhO0KVw7oRCW/FZJE1DXj0mX6dp1erdfyhadsDdWpIF3hfb+tpW7R85SUdgI+KvOC5/qxZ94ZnMFDzLUQwwp/nIcdbAofzRJEtZZeiUZGjESTy5BC3Su7RBLE/NXs4QHCRwisS5IxLgJiVYbBMg/mWOegoQtayktnG8jcTswf55IxPoWY5i8Npxecz9GlU4qpR8LcC7NQzRBbrdObGq1VjdZ1B9+feGptB7CpVixlCXQpbl8RwszTWedhZZ5wsV4WV16hDkJXo5CQFTadqF+4pXxWaCOuyqm0IH2tVyFIMtP92deK6gKhZVuk5ftPQOJJ3BqC0f4qsh/r+oLr5XrQrTaLV3xg2y/51leTzseg1tOUm+QhkGC80JGWjL2Oe+q0VBX8vL3kaOo40dN3hr9IiB9OWqHQczS/ySMkvikWjRlhQJ0ddZxjCMTrIgvgjiK9B7VG7l47Fwlmv+ztL2FU85SaFCWZNfpXwOOckYpAe//FaltEn4uWA7fpTlSzi2xU3x0xN1qajaaevZvB1YO9ZoroToYyzTPbpcTF0BvvoBwnrsgBU4zayHs+jZ1cIjma/lVtZH2UlE97DgRPVNLZ6yAbaphxeGpHC3MCCHmf/Vr7tosaJJZ9E3IZzhjIHBxdkF3kZJa2hucV/57Y2NtWqN3tErOVqWhH/jOq77kOhBdhaXDkbLDnM0gycdBs3TKOt6IprQY+F4gRaB3COHPvAsO5q96smECQtQi5MPs/3bW4gKkhbIPjYT8J+4g3GYpeQwqFJStQh96jmMMTBlxEl8A8JslErM66mvn5CTZTJY/V3uzDsPG17EoUHx4cygbcgq9b55x52+PRVrYAGq9ONmoS/apXuMHs/xJ4H5PhbhPDqRzA12T7ARi1TJmQ+2wEE0G8J945bIPNptk5B4rShw7+WiHZj79K+R7dEHfZPQK+EEiF+IcIS+Ugn4vFac6C0pNx9sbyln72iDjpdTUT+7qUVLSdMKiE5mr5uGXgsnQPy7CH9nW91iN0QbzLWNQV8Jp35o3uolYp2Avh2mQjhNlX70ox/96EdvweP9D8EqzZh4Umt0AAAAAElFTkSuQmCC";
