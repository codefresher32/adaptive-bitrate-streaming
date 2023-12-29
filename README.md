# adaptive-bitrate-streaming

Adaptive bitrate streaming with different streams format(HLS, DASH, MP4) in a video player called [vimond-replay](https://www.npmjs.com/package/vimond-replay?activeTab=readme). I have contributed to the [vimond-replay](https://github.com/vimond/replay/graphs/contributors) package for enabling the feature of switching among different available bitrate of the stream(HLS & DASH).

## How to work with this project

### Directory structure

| Folder | Description |
| --- | --- |
| <code>/ src        </code>| The components for initializing `Replay` |

### nvm 

I use nvm to lock the node version used in the project. Install nvm by following the guides here https://github.com/nvm-sh/nvm

After install, run these commands in the projects main directory.

```
$ nvm use
```
```
$ nvm install
```

### Install dependencies

```
$ npm install
```

### Run dev environment

Now start your application. It will run on localhost:3000

```console
$ npm run dev
```

### Building

To build the library run the command:

```
$ npm run build
```

That will bundle all the utils using webpack. The bundled library will be in the `dist` directory.

## Project Description

Basically in this project, I have shown how to use `Replay` player for playing different formats of streams(HLS, DASH, MP4).
While running this project, you can switch between different available bitrate in your stream. In the project, I set the `Replay`
configuration to instantly switch my picked bitrate from the `settings` icon of the player. So in that time, already buffered stream segment will be dropped and newly picked segment will be loaded and played. I have use the follow configuration for that:

```js
{
  videoStreamer: {
    manualBitrateSwitchStrategy: 'instant-switch'
  },
  controls: {
    qualitySelectionStrategy: 'fix-bitrate'
  },
}
```

You also can smoothly switch to your picked bitrate if you use the following `Replay` configuration:

```js
{
  videoStreamer: {
    manualBitrateSwitchStrategy: 'smooth-switch'
  },
  controls: {
    qualitySelectionStrategy: 'fix-bitrate'
  },
}
```

Using the following configuration, already buffered will be played at the time being and selected bitrate will be loaded for the next stream segment.

Also if you want to switch automatically, then you can select the `Automatic` option from `settings` icon of the `Replay` player. Then the bitrate will be switched based on your device conditions, networks bandwidth etc.

To know more about `Replay`, visit [Full feature list](https://vimond.github.io/replay/#/#features-list).
