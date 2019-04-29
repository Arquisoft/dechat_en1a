
import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class RecordedSimulation extends Simulation {

	val httpProtocol = http
		.baseUrl("https://solid.community")
		.inferHtmlResources()
		.userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36")

	val headers_0 = Map(
		"Accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.9,en;q=0.8,pl;q=0.7,en-GB;q=0.6",
		"Origin" -> "https://solid.community",
		"Upgrade-Insecure-Requests" -> "1")



	val scn = scenario("RecordedSimulation")
		.exec(http("request_0")
			.post("/login/password")
			.headers(headers_0)
			.formParam("username", "igalat7")
			.formParam("password", "Igalatal78")
			.formParam("response_type", "id_token token")
			.formParam("display", "")
			.formParam("scope", "openid")
			.formParam("client_id", "d94fe623136244fb3f3e45062f911869")
			.formParam("redirect_uri", "")
			.formParam("state", "JT6hVos9c16JhLRE3LO2B1KqPDE630u1u5EwDSHlav8")
			.formParam("nonce", "")
			.formParam("request", "eyJhbGciOiJub25lIn0.eyJyZWRpcmVjdF91cmkiOiJodHRwOi8vbG9jYWxob3N0OjQyMDAvbG9naW4iLCJkaXNwbGF5IjoicGFnZSIsIm5vbmNlIjoiZEFISzQ0TTNMNHIzTjRrU1htZ2lUVWFRRHBvWDB3dWtWbXZCQmJoS3l1RSIsImtleSI6eyJhbGciOiJSUzI1NiIsImUiOiJBUUFCIiwiZXh0Ijp0cnVlLCJrZXlfb3BzIjpbInZlcmlmeSJdLCJrdHkiOiJSU0EiLCJuIjoielhKb2IwbWpPZnRUWnp6UFgwN0ZucHVFZkJIRlA3SkNEQ1ItXy1wTGoyd0MtdmtXS00wamFUdHVFZ1pNb1BtdG5fRkNWSTJ3OVFtTzZKbkJ5d255dTBIdEhOYVZ6bDdJLThSdW0tV1c1WFRHQm40eWZkU2pmVnBkUElDSUNLY3U4R3JaQUJTVmNydkFnUHRDcXlWYlpDaDd4X09xRm9DNzFwNHNMblRLbGN4eFVUZVVKZWJLazhlOTdPMUpWcXkzRHllT2pzbDZmS0dBSUJLTlBvVG01THFKUGhmXzFIcGc2UzlnQTVPdHNKVmhyTU1uOVBONTFod0FNV3VpNUtOX2R5OTBPalZtTlBRaExnQV9PdEtjLVZRLWZnSm51dzhhTDJzQ2ZKRThRZEZIVlZrdGNWeFJ6VTdkUXVIN0JQSkc3YzNYX3pSQWRXV3MybkhBRkFzYk5RIn19.")
			.resources(http("request_1")
			.get("/favicon.ico")
			.check(status.is(401)))
			.check(status.is(400)))

	setUp(scn.inject(atOnceUsers(1))).protocols(httpProtocol)
}