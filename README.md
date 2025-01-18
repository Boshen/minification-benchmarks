<p align="center">
	<img width="160" src=".github/logo.webp">
</p>
<h1 align="center">
	<sup>minification benchmarks</sup>
</h1>

> What's the best JavaScript minifier?

This project benchmarks the following minifiers:

<!-- minifiers:start -->
- [esbuild](https://github.com/evanw/esbuild) <sub>v0.24.2</sub>
- [oxc-minify](https://github.com/oxc-project/oxc.git) <sub>v0.48.0</sub>
- [@swc/core](https://github.com/swc-project/swc) <sub>v1.10.9</sub>
- [@tdewolff/minify](https://github.com/tdewolff/minify#readme) <sub>v2.21.3</sub>
- [terser](https://github.com/terser/terser) <sub>v5.37.0</sub>
<!-- minifiers:end -->

_Benchmarks last updated on <!-- lastUpdated:start -->Jan 24, 2025<!-- lastUpdated:end -->._

<br>

<p align="center">
	<a href="https://github.com/sponsors/privatenumber/sponsorships?tier_id=398771"><img width="412" src="https://raw.githubusercontent.com/privatenumber/sponsors/master/banners/assets/donate.webp"></a>
	<a href="https://github.com/sponsors/privatenumber/sponsorships?tier_id=397608"><img width="412" src="https://raw.githubusercontent.com/privatenumber/sponsors/master/banners/assets/sponsor.webp"></a>
</p>

## 🙋‍♂️ Why?

1. To help you pick a minifier that fits your needs
2. To promote JS minifiers and document their performances
3. To encourage healthy competition and improvement amongst minifiers

## 👟 Methodology

- Each minifier is executed in its own process with a 10s timeout
- Artifact integrity is verified by a test before and after minification
- Minifier upgrade PRs are automated via [WhiteSource Renovate](https://www.whitesourcesoftware.com/free-developer-tools/renovate/)
- Benchmarks are updated on every PR via [GitHub Actions](https://github.com/privatenumber/minification-benchmarks/actions/workflows/benchmark.yml)

## ⏱ Metrics

Minifiers are ranked by smallest minzipped size.

#### Minified size

Size of the minified output.

#### Minzipped size

Size of the minified output with [Gzip compression](https://en.wikipedia.org/wiki/Gzip).

For minifiers, this measures how compressable the output is.

For users, this measures network transfer size, which is usually the metric that matters most.

#### Time

How long minification took (average of 5 runs). Each time is annotated with a multiplier relative to the fastest minifier.

## 📋 Results

<!-- benchmarks:start -->
```mermaid
---
config:
    xyChart:
        width: 720
        height: 360
        xAxis:
            labelPadding: 20
        yAxis:
            labelPadding: 10
---
xychart-beta
	title "react v17.0.2"
	x-axis ["Original",1,2,3,4,5]
	y-axis "Gzip size" 0 --> 19385
	bar [19385,8173,8265,8543,8631,8681]
```

<div align="center">

| Artifact                                                                                                                          |                    Original size |                       Gzip size |                          |
| :-------------------------------------------------------------------------------------------------------------------------------- | -------------------------------: | ------------------------------: | -----------------------: |
| [react v17.0.2](https://www.npmjs.com/package/react/v/17.0.2) ([Source](https://unpkg.com/react@17.0.2/cjs/react.development.js)) |                       `72.13 kB` |                      `19.39 kB` |                          |
| **Minifier**                                                                                                                      |                **Minified size** |              **Minzipped size** |                 **Time** |
| 1. [@swc/core](packages/minifiers/minifiers/swc.ts)                                                                               | **<sup>🏆-68% </sup>`22.87 kB`** | **<sup>🏆-58% </sup>`8.17 kB`** |   <sup>*7x* </sup>`9 ms` |
| 2. [terser](packages/minifiers/minifiers/terser.ts)                                                                               |       <sup>-68% </sup>`23.07 kB` |       <sup>-57% </sup>`8.27 kB` | <sup>*79x* </sup>`98 ms` |
| 3. [esbuild](packages/minifiers/minifiers/esbuild.ts)                                                                             |       <sup>-67% </sup>`23.70 kB` |       <sup>-56% </sup>`8.54 kB` | <sup>*11x* </sup>`14 ms` |
| 4. [@tdewolff/minify](packages/minifiers/minifiers/tdewolff-minify.ts)                                                            |       <sup>-67% </sup>`23.53 kB` |       <sup>-55% </sup>`8.63 kB` |   <sup>*1x* </sup>`1 ms` |
| 5. [oxc-minify](packages/minifiers/minifiers/oxc.ts)                                                                              |       <sup>-67% </sup>`23.71 kB` |       <sup>-55% </sup>`8.68 kB` | **<sup>🏆 </sup>`1 ms`** |
</div>

----

```mermaid
---
config:
    xyChart:
        width: 720
        height: 360
        xAxis:
            labelPadding: 20
        yAxis:
            labelPadding: 10
---
xychart-beta
	title "moment v2.29.1"
	x-axis ["Original",1,2,3,4,5]
	y-axis "Gzip size" 0 --> 36231
	bar [36231,18687,18690,19334,19496,19553]
```

<div align="center">

| Artifact                                                                                                              |                    Original size |                        Gzip size |                           |
| :-------------------------------------------------------------------------------------------------------------------- | -------------------------------: | -------------------------------: | ------------------------: |
| [moment v2.29.1](https://www.npmjs.com/package/moment/v/2.29.1) ([Source](https://unpkg.com/moment@2.29.1/moment.js)) |                      `173.90 kB` |                       `36.23 kB` |                           |
| **Minifier**                                                                                                          |                **Minified size** |               **Minzipped size** |                  **Time** |
| 1. [@swc/core](packages/minifiers/minifiers/swc.ts)                                                                   | **<sup>🏆-67% </sup>`58.21 kB`** | **<sup>🏆-48% </sup>`18.69 kB`** |   <sup>*9x* </sup>`25 ms` |
| 2. [terser](packages/minifiers/minifiers/terser.ts)                                                                   |       <sup>-66% </sup>`59.14 kB` |       <sup>-48% </sup>`18.69 kB` | <sup>*84x* </sup>`213 ms` |
| 3. [esbuild](packages/minifiers/minifiers/esbuild.ts)                                                                 |       <sup>-66% </sup>`59.82 kB` |       <sup>-47% </sup>`19.33 kB` |   <sup>*4x* </sup>`12 ms` |
| 4. [@tdewolff/minify](packages/minifiers/minifiers/tdewolff-minify.ts)                                                |       <sup>-66% </sup>`59.95 kB` |       <sup>-46% </sup>`19.50 kB` |  **<sup>🏆 </sup>`3 ms`** |
| 5. [oxc-minify](packages/minifiers/minifiers/oxc.ts)                                                                  |       <sup>-66% </sup>`59.79 kB` |       <sup>-46% </sup>`19.55 kB` |    <sup>*1x* </sup>`3 ms` |
</div>

----

```mermaid
---
config:
    xyChart:
        width: 720
        height: 360
        xAxis:
            labelPadding: 20
        yAxis:
            labelPadding: 10
---
xychart-beta
	title "jquery v3.5.1"
	x-axis ["Original",1,2,3,4,5]
	y-axis "Gzip size" 0 --> 84498
	bar [84498,30869,30912,31468,31954,32125]
```

<div align="center">

| Artifact                                                                                                                |                    Original size |                        Gzip size |                           |
| :---------------------------------------------------------------------------------------------------------------------- | -------------------------------: | -------------------------------: | ------------------------: |
| [jquery v3.5.1](https://www.npmjs.com/package/jquery/v/3.5.1) ([Source](https://unpkg.com/jquery@3.5.1/dist/jquery.js)) |                      `287.63 kB` |                       `84.50 kB` |                           |
| **Minifier**                                                                                                            |                **Minified size** |               **Minzipped size** |                  **Time** |
| 1. [@swc/core](packages/minifiers/minifiers/swc.ts)                                                                     | **<sup>🏆-69% </sup>`89.15 kB`** | **<sup>🏆-63% </sup>`30.87 kB`** |   <sup>*9x* </sup>`39 ms` |
| 2. [terser](packages/minifiers/minifiers/terser.ts)                                                                     |       <sup>-69% </sup>`89.54 kB` |       <sup>-63% </sup>`30.91 kB` | <sup>*69x* </sup>`288 ms` |
| 3. [@tdewolff/minify](packages/minifiers/minifiers/tdewolff-minify.ts)                                                  |       <sup>-69% </sup>`89.85 kB` |       <sup>-63% </sup>`31.47 kB` |  **<sup>🏆 </sup>`4 ms`** |
| 4. [esbuild](packages/minifiers/minifiers/esbuild.ts)                                                                   |       <sup>-69% </sup>`90.07 kB` |       <sup>-62% </sup>`31.95 kB` |   <sup>*4x* </sup>`20 ms` |
| 5. [oxc-minify](packages/minifiers/minifiers/oxc.ts)                                                                    |       <sup>-69% </sup>`90.08 kB` |       <sup>-62% </sup>`32.13 kB` |    <sup>*1x* </sup>`6 ms` |
</div>

----

```mermaid
---
config:
    xyChart:
        width: 720
        height: 360
        xAxis:
            labelPadding: 20
        yAxis:
            labelPadding: 10
---
xychart-beta
	title "vue v2.6.12"
	x-axis ["Original",1,2,3,4,5]
	y-axis "Gzip size" 0 --> 89668
	bar [89668,42485,42919,44368,44376,44667]
```

<div align="center">

| Artifact                                                                                                       |                     Original size |                        Gzip size |                           |
| :------------------------------------------------------------------------------------------------------------- | --------------------------------: | -------------------------------: | ------------------------: |
| [vue v2.6.12](https://www.npmjs.com/package/vue/v/2.6.12) ([Source](https://unpkg.com/vue@2.6.12/dist/vue.js)) |                       `342.15 kB` |                       `89.67 kB` |                           |
| **Minifier**                                                                                                   |                 **Minified size** |               **Minzipped size** |                  **Time** |
| 1. [@swc/core](packages/minifiers/minifiers/swc.ts)                                                            | **<sup>🏆-66% </sup>`115.48 kB`** | **<sup>🏆-53% </sup>`42.49 kB`** |   <sup>*8x* </sup>`56 ms` |
| 2. [terser](packages/minifiers/minifiers/terser.ts)                                                            |       <sup>-66% </sup>`116.80 kB` |       <sup>-52% </sup>`42.92 kB` | <sup>*56x* </sup>`363 ms` |
| 3. [esbuild](packages/minifiers/minifiers/esbuild.ts)                                                          |       <sup>-65% </sup>`118.14 kB` |       <sup>-51% </sup>`44.37 kB` |   <sup>*3x* </sup>`22 ms` |
| 4. [@tdewolff/minify](packages/minifiers/minifiers/tdewolff-minify.ts)                                         |       <sup>-66% </sup>`117.81 kB` |       <sup>-51% </sup>`44.38 kB` |  **<sup>🏆 </sup>`6 ms`** |
| 5. [oxc-minify](packages/minifiers/minifiers/oxc.ts)                                                           |       <sup>-65% </sup>`118.19 kB` |       <sup>-50% </sup>`44.67 kB` |    <sup>*1x* </sup>`8 ms` |
</div>

----

```mermaid
---
config:
    xyChart:
        width: 720
        height: 360
        xAxis:
            labelPadding: 20
        yAxis:
            labelPadding: 10
---
xychart-beta
	title "lodash v4.17.21"
	x-axis ["Original",1,2,3,4,5]
	y-axis "Gzip size" 0 --> 96690
	bar [96690,25153,25186,26200,26377,26498]
```

<div align="center">

| Artifact                                                                                                                 |                    Original size |                        Gzip size |                           |
| :----------------------------------------------------------------------------------------------------------------------- | -------------------------------: | -------------------------------: | ------------------------: |
| [lodash v4.17.21](https://www.npmjs.com/package/lodash/v/4.17.21) ([Source](https://unpkg.com/lodash@4.17.21/lodash.js)) |                      `544.09 kB` |                       `96.69 kB` |                           |
| **Minifier**                                                                                                             |                **Minified size** |               **Minzipped size** |                  **Time** |
| 1. [@swc/core](packages/minifiers/minifiers/swc.ts)                                                                      | **<sup>🏆-87% </sup>`69.83 kB`** | **<sup>🏆-74% </sup>`25.15 kB`** |   <sup>*9x* </sup>`52 ms` |
| 2. [terser](packages/minifiers/minifiers/terser.ts)                                                                      |       <sup>-87% </sup>`70.67 kB` |       <sup>-74% </sup>`25.19 kB` | <sup>*58x* </sup>`311 ms` |
| 3. [esbuild](packages/minifiers/minifiers/esbuild.ts)                                                                    |       <sup>-87% </sup>`72.48 kB` |       <sup>-73% </sup>`26.20 kB` |   <sup>*3x* </sup>`18 ms` |
| 4. [oxc-minify](packages/minifiers/minifiers/oxc.ts)                                                                     |       <sup>-87% </sup>`71.74 kB` |       <sup>-73% </sup>`26.38 kB` |  **<sup>🏆 </sup>`5 ms`** |
| 5. [@tdewolff/minify](packages/minifiers/minifiers/tdewolff-minify.ts)                                                   |       <sup>-87% </sup>`71.90 kB` |       <sup>-73% </sup>`26.50 kB` |    <sup>*1x* </sup>`6 ms` |
</div>

----

```mermaid
---
config:
    xyChart:
        width: 720
        height: 360
        xAxis:
            labelPadding: 20
        yAxis:
            labelPadding: 10
---
xychart-beta
	title "d3 v6.3.1"
	x-axis ["Original",1,2,3,4,5]
	y-axis "Gzip size" 0 --> 130686
	bar [130686,87202,88087,89891,90800,91187]
```

<div align="center">

| Artifact                                                                                                |                     Original size |                        Gzip size |                           |
| :------------------------------------------------------------------------------------------------------ | --------------------------------: | -------------------------------: | ------------------------: |
| [d3 v6.3.1](https://www.npmjs.com/package/d3/v/6.3.1) ([Source](https://unpkg.com/d3@6.3.1/dist/d3.js)) |                       `555.77 kB` |                      `130.69 kB` |                           |
| **Minifier**                                                                                            |                 **Minified size** |               **Minzipped size** |                  **Time** |
| 1. [@swc/core](packages/minifiers/minifiers/swc.ts)                                                     | **<sup>🏆-52% </sup>`265.26 kB`** | **<sup>🏆-33% </sup>`87.20 kB`** |  <sup>*6x* </sup>`117 ms` |
| 2. [terser](packages/minifiers/minifiers/terser.ts)                                                     |       <sup>-52% </sup>`267.77 kB` |       <sup>-33% </sup>`88.09 kB` | <sup>*42x* </sup>`786 ms` |
| 3. [@tdewolff/minify](packages/minifiers/minifiers/tdewolff-minify.ts)                                  |       <sup>-51% </sup>`269.93 kB` |       <sup>-31% </sup>`89.89 kB` |   <sup>*1x* </sup>`19 ms` |
| 4. [esbuild](packages/minifiers/minifiers/esbuild.ts)                                                   |       <sup>-51% </sup>`270.13 kB` |       <sup>-31% </sup>`90.80 kB` |   <sup>*1x* </sup>`36 ms` |
| 5. [oxc-minify](packages/minifiers/minifiers/oxc.ts)                                                    |       <sup>-51% </sup>`272.89 kB` |       <sup>-30% </sup>`91.19 kB` | **<sup>🏆 </sup>`18 ms`** |
</div>

----

```mermaid
---
config:
    xyChart:
        width: 720
        height: 360
        xAxis:
            labelPadding: 20
        yAxis:
            labelPadding: 10
---
xychart-beta
	title "terser v5.30.3"
	x-axis ["Original",1,2,3,4,5]
	y-axis "Gzip size" 0 --> 193763
	bar [193763,123071,123482,124897,126706,127248]
```

<div align="center">

| Artifact                                                                                                                       |                     Original size |                         Gzip size |                           |
| :----------------------------------------------------------------------------------------------------------------------------- | --------------------------------: | --------------------------------: | ------------------------: |
| [terser v5.30.3](https://www.npmjs.com/package/terser/v/5.30.3) ([Source](https://unpkg.com/terser@5.30.3/dist/bundle.min.js)) |                         `1.01 MB` |                       `193.76 kB` |                           |
| **Minifier**                                                                                                                   |                 **Minified size** |                **Minzipped size** |                  **Time** |
| 1. [@swc/core](packages/minifiers/minifiers/swc.ts)                                                                            | **<sup>🏆-55% </sup>`455.55 kB`** | **<sup>🏆-36% </sup>`123.07 kB`** |  <sup>*6x* </sup>`108 ms` |
| 2. [terser](packages/minifiers/minifiers/terser.ts)                                                                            |       <sup>-55% </sup>`458.29 kB` |       <sup>-36% </sup>`123.48 kB` | <sup>*42x* </sup>`727 ms` |
| 3. [@tdewolff/minify](packages/minifiers/minifiers/tdewolff-minify.ts)                                                         |       <sup>-55% </sup>`456.70 kB` |       <sup>-36% </sup>`124.90 kB` | **<sup>🏆 </sup>`17 ms`** |
| 4. [esbuild](packages/minifiers/minifiers/esbuild.ts)                                                                          |       <sup>-55% </sup>`458.89 kB` |       <sup>-35% </sup>`126.71 kB` |   <sup>*2x* </sup>`36 ms` |
| 5. [oxc-minify](packages/minifiers/minifiers/oxc.ts)                                                                           |       <sup>-54% </sup>`460.16 kB` |       <sup>-34% </sup>`127.25 kB` |   <sup>*1x* </sup>`20 ms` |
</div>

----

```mermaid
---
config:
    xyChart:
        width: 720
        height: 360
        xAxis:
            labelPadding: 20
        yAxis:
            labelPadding: 10
---
xychart-beta
	title "three v0.124.0"
	x-axis ["Original",1,2,3,4,5]
	y-axis "Gzip size" 0 --> 248267
	bar [248267,158224,159198,163725,164429,164737]
```

<div align="center">

| Artifact                                                                                                                   |                     Original size |                         Gzip size |                             |
| :------------------------------------------------------------------------------------------------------------------------- | --------------------------------: | --------------------------------: | --------------------------: |
| [three v0.124.0](https://www.npmjs.com/package/three/v/0.124.0) ([Source](https://unpkg.com/three@0.124.0/build/three.js)) |                         `1.25 MB` |                       `248.27 kB` |                             |
| **Minifier**                                                                                                               |                 **Minified size** |                **Minzipped size** |                    **Time** |
| 1. [@swc/core](packages/minifiers/minifiers/swc.ts)                                                                        | **<sup>🏆-48% </sup>`642.89 kB`** | **<sup>🏆-36% </sup>`158.22 kB`** |    <sup>*5x* </sup>`158 ms` |
| 2. [terser](packages/minifiers/minifiers/terser.ts)                                                                        |       <sup>-48% </sup>`653.25 kB` |       <sup>-36% </sup>`159.20 kB` | <sup>*38x* </sup>`1,041 ms` |
| 3. [esbuild](packages/minifiers/minifiers/esbuild.ts)                                                                      |       <sup>-48% </sup>`646.76 kB` |       <sup>-34% </sup>`163.73 kB` |     <sup>*1x* </sup>`51 ms` |
| 4. [oxc-minify](packages/minifiers/minifiers/oxc.ts)                                                                       |       <sup>-48% </sup>`652.68 kB` |       <sup>-34% </sup>`164.43 kB` |   **<sup>🏆 </sup>`27 ms`** |
| 5. [@tdewolff/minify](packages/minifiers/minifiers/tdewolff-minify.ts)                                                     |       <sup>-48% </sup>`644.55 kB` |       <sup>-34% </sup>`164.74 kB` |     <sup>*1x* </sup>`27 ms` |
</div>

----

```mermaid
---
config:
    xyChart:
        width: 720
        height: 360
        xAxis:
            labelPadding: 20
        yAxis:
            labelPadding: 10
---
xychart-beta
	title "victory v35.8.4"
	x-axis ["Original",1,2,3,4,5]
	y-axis "Gzip size" 0 --> 309942
	bar [309942,157800,158706,165131,180922,181071]
```

<div align="center">

| Artifact                                                                                                                       |                     Original size |                         Gzip size |                             |
| :----------------------------------------------------------------------------------------------------------------------------- | --------------------------------: | --------------------------------: | --------------------------: |
| [victory v35.8.4](https://www.npmjs.com/package/victory/v/35.8.4) ([Source](https://unpkg.com/victory@35.8.4/dist/victory.js)) |                         `2.13 MB` |                       `309.94 kB` |                             |
| **Minifier**                                                                                                                   |                 **Minified size** |                **Minzipped size** |                    **Time** |
| 1. [@swc/core](packages/minifiers/minifiers/swc.ts)                                                                            | **<sup>🏆-67% </sup>`707.20 kB`** | **<sup>🏆-49% </sup>`157.80 kB`** |    <sup>*6x* </sup>`225 ms` |
| 2. [terser](packages/minifiers/minifiers/terser.ts)                                                                            |       <sup>-66% </sup>`715.58 kB` |       <sup>-49% </sup>`158.71 kB` | <sup>*44x* </sup>`1,457 ms` |
| 3. [@tdewolff/minify](packages/minifiers/minifiers/tdewolff-minify.ts)                                                         |       <sup>-66% </sup>`718.73 kB` |       <sup>-47% </sup>`165.13 kB` |   **<sup>🏆 </sup>`33 ms`** |
| 4. [oxc-minify](packages/minifiers/minifiers/oxc.ts)                                                                           |       <sup>-66% </sup>`723.85 kB` |       <sup>-42% </sup>`180.92 kB` |     <sup>*1x* </sup>`36 ms` |
| 5. [esbuild](packages/minifiers/minifiers/esbuild.ts)                                                                          |       <sup>-66% </sup>`724.14 kB` |       <sup>-42% </sup>`181.07 kB` |     <sup>*2x* </sup>`68 ms` |
</div>

----

```mermaid
---
config:
    xyChart:
        width: 720
        height: 360
        xAxis:
            labelPadding: 20
        yAxis:
            labelPadding: 10
---
xychart-beta
	title "echarts v5.1.1"
	x-axis ["Original",1,2,3,4,5]
	y-axis "Gzip size" 0 --> 684611
	bar [684611,320193,321987,331563,331791,333542]
```

<div align="center">

| Artifact                                                                                                                    |                     Original size |                         Gzip size |                             |
| :-------------------------------------------------------------------------------------------------------------------------- | --------------------------------: | --------------------------------: | --------------------------: |
| [echarts v5.1.1](https://www.npmjs.com/package/echarts/v/5.1.1) ([Source](https://unpkg.com/echarts@5.1.1/dist/echarts.js)) |                         `3.20 MB` |                       `684.61 kB` |                             |
| **Minifier**                                                                                                                |                 **Minified size** |                **Minzipped size** |                    **Time** |
| 1. [@swc/core](packages/minifiers/minifiers/swc.ts)                                                                         | **<sup>🏆-69% </sup>`993.02 kB`** | **<sup>🏆-53% </sup>`320.19 kB`** |    <sup>*6x* </sup>`432 ms` |
| 2. [terser](packages/minifiers/minifiers/terser.ts)                                                                         |         <sup>-69% </sup>`1.00 MB` |       <sup>-53% </sup>`321.99 kB` | <sup>*34x* </sup>`2,216 ms` |
| 3. [esbuild](packages/minifiers/minifiers/esbuild.ts)                                                                       |         <sup>-68% </sup>`1.01 MB` |       <sup>-52% </sup>`331.56 kB` |    <sup>*1x* </sup>`104 ms` |
| 4. [@tdewolff/minify](packages/minifiers/minifiers/tdewolff-minify.ts)                                                      |         <sup>-68% </sup>`1.01 MB` |       <sup>-52% </sup>`331.79 kB` |     <sup>*1x* </sup>`68 ms` |
| 5. [oxc-minify](packages/minifiers/minifiers/oxc.ts)                                                                        |         <sup>-68% </sup>`1.01 MB` |       <sup>-51% </sup>`333.54 kB` |   **<sup>🏆 </sup>`63 ms`** |
</div>

----

```mermaid
---
config:
    xyChart:
        width: 720
        height: 360
        xAxis:
            labelPadding: 20
        yAxis:
            labelPadding: 10
---
xychart-beta
	title "antd v4.16.1"
	x-axis ["Original",1,2,3,4,5]
	y-axis "Gzip size" 0 --> 825175
	bar [825175,452861,457786,472044,488279,489022]
```

<div align="center">

| Artifact                                                                                                           |                   Original size |                         Gzip size |                             |
| :----------------------------------------------------------------------------------------------------------------- | ------------------------------: | --------------------------------: | --------------------------: |
| [antd v4.16.1](https://www.npmjs.com/package/antd/v/4.16.1) ([Source](https://unpkg.com/antd@4.16.1/dist/antd.js)) |                       `6.67 MB` |                       `825.18 kB` |                             |
| **Minifier**                                                                                                       |               **Minified size** |                **Minzipped size** |                    **Time** |
| 1. [@swc/core](packages/minifiers/minifiers/swc.ts)                                                                | **<sup>🏆-68% </sup>`2.15 MB`** | **<sup>🏆-45% </sup>`452.86 kB`** |    <sup>*6x* </sup>`536 ms` |
| 2. [terser](packages/minifiers/minifiers/terser.ts)                                                                |       <sup>-66% </sup>`2.25 MB` |       <sup>-45% </sup>`457.79 kB` | <sup>*31x* </sup>`2,560 ms` |
| 3. [@tdewolff/minify](packages/minifiers/minifiers/tdewolff-minify.ts)                                             |       <sup>-66% </sup>`2.30 MB` |       <sup>-43% </sup>`472.04 kB` |   **<sup>🏆 </sup>`81 ms`** |
| 4. [esbuild](packages/minifiers/minifiers/esbuild.ts)                                                              |       <sup>-65% </sup>`2.31 MB` |       <sup>-41% </sup>`488.28 kB` |    <sup>*1x* </sup>`154 ms` |
| 5. [oxc-minify](packages/minifiers/minifiers/oxc.ts)                                                               |       <sup>-65% </sup>`2.31 MB` |       <sup>-41% </sup>`489.02 kB` |     <sup>*1x* </sup>`85 ms` |
</div>

----

```mermaid
---
config:
    xyChart:
        width: 720
        height: 360
        xAxis:
            labelPadding: 20
        yAxis:
            labelPadding: 10
---
xychart-beta
	title "typescript v4.9.5"
	x-axis ["Original",1,2,3,4,5]
	y-axis "Gzip size" 0 --> 1884998
	bar [1884998,851745,854211,876658,907984,915495]
```

<div align="center">

| Artifact                                                                                                                               |                   Original size |                         Gzip size |                             |
| :------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------: | --------------------------------: | --------------------------: |
| [typescript v4.9.5](https://www.npmjs.com/package/typescript/v/4.9.5) ([Source](https://unpkg.com/typescript@4.9.5/lib/typescript.js)) |                      `10.95 MB` |                         `1.88 MB` |                             |
| **Minifier**                                                                                                                           |               **Minified size** |                **Minzipped size** |                    **Time** |
| 1. [@swc/core](packages/minifiers/minifiers/swc.ts)                                                                                    | **<sup>🏆-70% </sup>`3.31 MB`** | **<sup>🏆-55% </sup>`851.75 kB`** |  <sup>*7x* </sup>`1,084 ms` |
| 2. [terser](packages/minifiers/minifiers/terser.ts)                                                                                    |       <sup>-69% </sup>`3.35 MB` |       <sup>-55% </sup>`854.21 kB` | <sup>*37x* </sup>`5,346 ms` |
| 3. [@tdewolff/minify](packages/minifiers/minifiers/tdewolff-minify.ts)                                                                 |       <sup>-69% </sup>`3.36 MB` |       <sup>-53% </sup>`876.66 kB` |  **<sup>🏆 </sup>`143 ms`** |
| 4. [oxc-minify](packages/minifiers/minifiers/oxc.ts)                                                                                   |       <sup>-68% </sup>`3.48 MB` |       <sup>-52% </sup>`907.98 kB` |    <sup>*1x* </sup>`166 ms` |
| 5. [esbuild](packages/minifiers/minifiers/esbuild.ts)                                                                                  |       <sup>-68% </sup>`3.49 MB` |       <sup>-51% </sup>`915.50 kB` |    <sup>*1x* </sup>`254 ms` |
</div>
<!-- benchmarks:end -->

## Sponsors

<p align="center">
	<a href="https://github.com/sponsors/privatenumber">
		<img src="https://cdn.jsdelivr.net/gh/privatenumber/sponsors/sponsorkit/sponsors.svg">
	</a>
</p>
