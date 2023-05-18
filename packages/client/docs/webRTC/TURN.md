## STUN 与 TURN 是什么

理想的网络情况是每个浏览器的电脑都是私有公网IP，可以直接进行点对点连接。事实上，真实的网络环境非常复杂，特别是在国内很多企业都有多级网络，有的网络甚至禁止发送UDP包，这样在对称的NAT网络下，打洞是打不通的，必须借助TURN服务器转发。

我们要实现网络穿透，就需要做IP，端口映射，需要知道自己所在的 公网IP，这时候我们需要借助STUN服务器. 那什么是STUN服务器呢？

STUN（Session Traversal Utilities for NAT，NAT会话穿越应用程序）是一种网络协议，它允许位于NAT（或多重NAT）后的客户端找出自己的公网地址(ip+port)，查出自己位于哪种类型的NAT之后以及NAT为某一个本地端口所绑定的Internet端端口。告诉我你的公网IP地址+端口是什么

- 问题是：STUN并不是每次都能成功的为需要NAT的通话设备分配IP地址的，P2P在传输媒体流时，使用的本地带宽，在多人视频通话的过程中，通话质量的好坏往往需要根据使用者本地的带宽确定。

- 即使透过 STUN 服务器取得了公用 IP 位址，也不一定能建立连线。因为不同的NAT类型处理传入的UDP分组的方式是不同的。

那么怎么办？TURN可以很好的解决这个问题。

TURN的全称为Traversal Using Relays around NAT，是STUN/RFC5389的一个拓展，主要添加了Relay功能。如果终端在NAT之后， 那么在特定的情景下，有可能使得终端无法和其对等端（peer）进行直接的通信，这时就需要公网的服务器作为一个中继，对来往的数据进行转发。

在STUN分配公网IP失败后，可以通过TURN服务器请求公网IP地址作为中继地址。这种方式的带宽由服务器端承担，在多人视频聊天的时候，本地带宽压力较小。以上是WebRTC中经常用到的2个协议，STUN和TURN服务器我们使用coturn开源项目来搭建。



## 在webrtc 中 coturn 与 ICE 分别是什么?

在WebRTC中，Coturn和ICE（Interactive Connectivity Establishment）是两个与网络连接和通信相关的重要概念。

Coturn（也称为TURN服务器）：Coturn是一个开源的TURN服务器实现，用于处理WebRTC中的NAT穿越（NAT traversal）。在WebRTC通信中，如果两个设备位于不同的局域网（如位于不同的内部网络或通过不同的NAT设备连接到互联网），它们之间的直接通信可能会受到NAT的限制。TURN服务器充当一个中继站，它允许设备在互联网上通过TURN服务器进行数据传输，以便在无法直接建立点对点连接时进行中继。

ICE（Interactive Connectivity Establishment）：ICE是一种用于在WebRTC中建立点对点连接的网络协议框架。ICE通过在WebRTC端点之间进行候选地址收集、连接性检测和优先级排序来寻找最佳的通信路径。ICE使用一种叫做ICE候选者的机制来识别设备的网络地址，并尝试建立直接的对等连接。ICE首先尝试使用UDP进行通信，如果UDP不可用，则会尝试使用TCP。如果直接通信不可行（由于防火墙或NAT限制等原因），ICE将使用TURN服务器作为中继站来实现通信。

综上所述，Coturn是一种TURN服务器，用于处理WebRTC中的NAT穿越，而ICE是一种协议框架，用于在WebRTC中建立点对点连接，并使用候选者和连接性检测来找到最佳的通信路径。

P2P= STUN + TURN + ICE
