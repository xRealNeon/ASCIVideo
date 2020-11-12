# ASCIVideo 🎞️
 ASCI video generator and player 

## Using with Docker <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/docker/docker.png" alt="android" width="30" height="30"/>
If you want to run this in Docker just replace `your_path` with the absolute path of your video folder and `Video.mp4` with the Filename of your Video and run the command below
```
docker run -v your_path:/app/io -e VIDEO="Video.mp4" neocodedev/ascivideo:latest
```

## Installation 📀
> If you don't want to use Docker you have to install this

Install npm packages with `npm i`

[Install ffmpeg](https://ffmpeg.org/download.html)

<details><summary>Install jp2a</summary>
<p>

#### Debian

```bash
sudo apt install jp2a
```

#### Arch

```bash
sudo pacman -S jp2a
```

#### Fedora

```bash
sudo dnf install jp2a
```

#### CentOS / RHEL

```bash
sudo yum install epel-release
```
```bash
sudo yum install jp2a
```

#### openSUSE

```bash
sudo zypper install jp2a
```
</p>
</details>

## Using on Windows <img src="https://1000logos.net/wp-content/uploads/2017/06/Windows-Logo.png" alt="android" width="30" height="30"/>

if you want to use this program in windows i recommend to use [wsl](https://docs.microsoft.com/windows/wsl/install-win10)

## Usage ⌨️
```bash
./convert.sh video.mp4
```
