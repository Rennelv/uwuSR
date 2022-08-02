/**
 * @package uwuSR
 * @author uwu-Inc
 * @license AGPL-3.0
 */
import Interface from "./commands/Interface";
import HttpServer from "./http/HttpServer";
import SRServer from "./server/kcp/SRServer";
import Logger from "./util/Logger";
import ProtoFactory from "./util/ProtoFactory"

const c = new Logger("uwuSR");
c.log(`Starting uwuSR...`);
ProtoFactory.init();
Interface.start();
HttpServer.getInstance().start();
SRServer.getInstance().start();