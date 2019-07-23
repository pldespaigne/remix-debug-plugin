# Debug Plugin for Remix
> The famous web based Ethereum IDE [Remix](https://remix.ethereum.org) has a plugin api that let dev build new plugins.
> This repo is a Remix debug plugin, its goal is to help plugin dev to test their plugins.
> It cloud also help the Remix dev to test their plugin api.

## 📥 Instaltion
This steps will let you use the debug plugin in your Remix IDE :
- open [Remix](https://remix.ethereum.org)
- go the Plugin Manager
- then click on "Connect to a Local Plugin"
- fill in the plugin name and the display name (remember the plugin name)
- in the url field type : `https://remix-debug-a.surge.sh`
  > ⚠️ Be sure to use an `https` url if you have opened Remix in `https`,
  > and use `http` is you have opened Remix in `http` (i.e. the protocol of Remix and the plugin should be the same)
- you can skip the Events & Notifications sections
- and check "Side Pannel" in the loaction section
- finnaly click on "Ok"
> The same plugin is also availlable under `https://remix-debug-b.surge.sh`
> so that you can load it twice into Remix to test cross-plugin communication.
